import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-base';
  public opcionesMenu: MenuItem[] = [
    { url: '/home', nombre: 'Buscar Cita' },
    { url: '/producto', nombre: 'Mis Citas' },
    { url: '/cliente', nombre: 'Manejo de Producto' }
  ];

}
