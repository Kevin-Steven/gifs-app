import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateralComponent } from "../../components/menu-lateral/menu-lateral.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, MenuLateralComponent],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent { }
