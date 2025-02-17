import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Profesional } from '../model/profesional';

@Injectable()
export class ProfesionalesService {
  constructor(protected http: HttpService) {}

  public consultar() {
    try {
      return this.http.doGet<Profesional[]>(`${environment.endpoint}/profesionales`);      
    } catch (error) {
      console.log(error); 
    }
  }
}
