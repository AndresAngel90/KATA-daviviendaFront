import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/service/auth/auth.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.scss']
})
export class CrearCuentaComponent {
  crearCuentaForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder, 
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {
    this.crearCuentaForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      correoUsuario: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  onCrearCuenta() {
    if (this.crearCuentaForm.valid) {
      const comandoCrearCuenta = this.crearCuentaForm.value;
      this.authService.crearCuenta(comandoCrearCuenta).subscribe({
        next: () => {
          alert('Ceunta creada correctamente');
          this.router.navigate(['login']);
        },
        error: () => {
          alert('No se pudo crear la cuenta');
        },
      });
      
    }
  }

  redirectLogin(){
    this.router.navigate(['login']);
  }

}
