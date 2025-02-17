import { Component, Input } from '@angular/core';
import { Profesional } from '@home/shared/model/profesional';

@Component({
  selector: 'app-profesional',
  templateUrl: './profesional.component.html',
  styleUrls: ['./profesional.component.scss']
})
export class ProfesionalComponent {
  @Input() profesional: Profesional;
}
