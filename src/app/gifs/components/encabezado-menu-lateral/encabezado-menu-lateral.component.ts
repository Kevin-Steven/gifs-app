import { Component } from '@angular/core';
import { environment } from '@environments/environment';
// import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'gifs-encabezado-menu-lateral',
  imports: [],
  templateUrl: './encabezado-menu-lateral.component.html',
})
export class EncabezadoMenuLateralComponent {
  envs = environment;
 }
