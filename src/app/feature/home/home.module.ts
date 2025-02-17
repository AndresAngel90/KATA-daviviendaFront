import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProfesionalComponent } from './components/profesional/profesional.component';
import { ProfesionalesService } from './shared/service/profesionales.service';
import { AgendarCitaModalComponent } from './components/agendar-cita-modal/agendar-cita-modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfesionalComponent,
    AgendarCitaModalComponent
  ],
  imports: [HomeRoutingModule, SharedModule],
  providers: [ProfesionalesService],
})
export class HomeModule {}
