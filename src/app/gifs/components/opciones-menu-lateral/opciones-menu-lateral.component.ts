import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption {
  icon: string;
  label: string;
  ruta: string;
  subLabel: string;
}

@Component({
  selector: 'gifs-opciones-menu-lateral',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './opciones-menu-lateral.component.html',
})
export class OpcionesMenuLateralComponent {

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      ruta: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar Gifs',
      ruta: '/dashboard/search',
    }
  ];

 }
