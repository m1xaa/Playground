import { Component, EventEmitter, Output } from '@angular/core';
import { AuthStateService } from '../../../../auth_state/auth-state.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginRequest } from '../../../../models/auth/login-request';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() close = new EventEmitter<void>();
  loginForm: FormGroup;

  constructor(private authState: AuthStateService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ["", Validators.email],
      password: ["", Validators.required]
    })
  }

  login() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const request: LoginRequest = {
      'email': this.loginForm.value.email,
      'password': this.loginForm.value.password
    }
    this.authState.login(request);
    this.close.emit();
  }

  closeModal() {
    this.close.emit();
  }
}
