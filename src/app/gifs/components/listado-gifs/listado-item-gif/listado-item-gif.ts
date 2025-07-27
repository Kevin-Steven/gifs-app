import { Component, input } from '@angular/core';

@Component({
  selector: 'listado-item-gif',
  imports: [],
  templateUrl: './listado-item-gif.html',
})
export class ListadoItemGif {
  //TODO: imageUrl: string; input
  imageUrl = input.required<string>();

}
