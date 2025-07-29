import { Component } from '@angular/core';
import { EncabezadoMenuLateralComponent } from "./encabezado-menu-lateral/encabezado-menu-lateral.component";
import { OpcionesMenuLateralComponent } from "./opciones-menu-lateral/opciones-menu-lateral.component";

@Component({
  selector: 'gifs-menu-lateral',
  imports: [EncabezadoMenuLateralComponent, OpcionesMenuLateralComponent],
  templateUrl: './menu-lateral.component.html',
})
export class MenuLateralComponent { }
