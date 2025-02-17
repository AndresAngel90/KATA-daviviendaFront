import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AuthService } from './shared/service/auth/auth.service';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';

@NgModule({
  declarations: [
    LoginComponent,
    CrearCuentaComponent,
  ],
  imports: [LoginRoutingModule, SharedModule],
  providers: [AuthService],
})
export class LoginModule {}
