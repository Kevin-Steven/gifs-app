import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { ListadoGifs } from "../../components/listado-gifs/listado-gifs";

@Component({
  selector: 'gif-history-page',
  imports: [ListadoGifs],
  templateUrl: './gif-history-page.component.html',
})
export default class GifHistoryPageComponent {

  gifService = inject( GifService );

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map(params => params['query']))
  );

  gifsByKey = computed(() =>  this.gifService.getHistoryGifs(this.query()))
}
