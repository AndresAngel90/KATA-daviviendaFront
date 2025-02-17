import { Component, OnInit } from '@angular/core';
import { Profesional } from '@home/shared/model/profesional';
import { ProfesionalesService } from '@home/shared/service/profesionales.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listaProfesionales: Observable<Profesional[]>;
  listaProfesionalesVacia: Observable<boolean>;
  constructor(private readonly profesionalesService: ProfesionalesService){}


  async ngOnInit(){
    this.listaProfesionales = this.profesionalesService.consultar(); 
    this.subscirbirseListaProductosVacia();
  }

  subscirbirseListaProductosVacia(){
    this.listaProfesionalesVacia = this.listaProfesionales.pipe(
      map(productos => productos.length !== 0)
    );
  }


}
