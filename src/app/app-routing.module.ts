import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule), canActivate: [SecurityGuard]  },
  { path: 'cliente', loadChildren: () => import('@cliente/cliente.module').then(mod => mod.ClienteModule), canActivate: [SecurityGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
