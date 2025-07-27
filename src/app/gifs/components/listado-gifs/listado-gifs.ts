import { Component, input } from '@angular/core';
import { ListadoItemGif } from "./listado-item-gif/listado-item-gif";

@Component({
  selector: 'listado-gifs',
  imports: [ListadoItemGif],
  templateUrl: './listado-gifs.html',
})
export class ListadoGifs {

  // TODO: input string[]
  listadoGifs = input.required<string[]>();
}
