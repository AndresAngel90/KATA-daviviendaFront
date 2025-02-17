import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agendar-cita-modal',
  templateUrl: './agendar-cita-modal.component.html',
  styleUrls: ['./agendar-cita-modal.component.scss']
})
export class AgendarCitaModalComponent {
  @Output() cerrar = new EventEmitter<void>();
  agendarCitaForm: FormGroup;
  duracionOptions = [30, 45, 60];

  constructor(private fb: FormBuilder) {
    this.agendarCitaForm = this.fb.group({
      fechaHora: ['', Validators.required],
      duracion: ['', [Validators.required, Validators.pattern('^(30|45|60)$')]],
      descripcion: ['']
    });
  }

  onAgendarCita() {
    if (this.agendarCitaForm.valid) {
      const { fechaHora, duracion, descripcion } = this.agendarCitaForm.value;
      console.log('Cita agendada:', { fechaHora, duracion, descripcion });
    }
  }

  cerrarModal() {
    this.cerrar.emit(); 
  }
}
