import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Autenticacion } from '../../model/autenticacion';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CrearCuenta } from '../../model/crear-cuenta';

@Injectable()
export class AuthService {

  constructor(protected http: HttpService) {}

  login(credenciales: Autenticacion): Observable<any> {
    return this.http.doPost(`${environment.endpoint}/auth/login`, credenciales);
  }

  guardarToken(token: string): void{
    localStorage.setItem('jwtToken', token);
  }

  validarToken(){
    return this.http.doGet(`${environment.endpoint}/auth/validar-token`);
  }

  crearCuenta(crearCuentaComando: CrearCuenta): Observable<any> {
    return this.http.doPost(`${environment.endpoint}/auth/crearCuenta`, crearCuentaComando);
  }

}
