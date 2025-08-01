import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

import { environment } from '@environments/environment';
import { Gif } from '../interfaces/gif.interface';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif.mapper';

const GIF_KEY = 'gifs'
const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}'; //Record<string>, gifs[]
  const gifs = JSON.parse( gifsFromLocalStorage );

  return gifs;
}

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient)

  trendingGifs = signal<Gif[]>([]);
  trendingGidsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
  }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyString);
  })

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        }
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGidsLoading.set(false);
        console.log({ gifs });
      });
  }

  searchGifs(query: string): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        q: query,
      }
    })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.mapGiphyItemToGifArray(items)),
        //Historial
        tap( items => {
          this.searchHistory.update( history => ({
            ...history,
            [query.toLowerCase()]: items,
          }))
        })
      );
    // .subscribe((resp) => {
    //   const gifs = GifMapper.mapGiphyItemToGifArray(resp.data);
    //   console.log({ search: gifs });
    // });
  }

  getHistoryGifs( query: string ) {
    return this.searchHistory()[query] ?? [];
  }
}
