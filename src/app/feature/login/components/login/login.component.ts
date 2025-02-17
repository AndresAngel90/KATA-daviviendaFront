import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../shared/service/auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next: (response) => {
          const token  = response.token;
          this.authService.guardarToken(token);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.log(error);
          alert('Credenciales incorrectas');
        },
      });
    }
  }

  redirectCrearCuenta(){
    this.router.navigate(['crearCuenta']);
  }
}
