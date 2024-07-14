import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../../service/auth.service';
import { AuthStateService } from '../../../../auth_state/auth-state.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationRequest } from '../../../../models/auth/registration-request';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  @Output() close = new EventEmitter<void>();
  registrationForm: FormGroup;

  constructor(private authState: AuthStateService, private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", Validators.email],
      password: ["", Validators.required]
    })
  }

  register() {
    if (!this.registrationForm.valid) {
      this.registrationForm.markAllAsTouched();
      return;
    }
    const request: RegistrationRequest = {
      'name': this.registrationForm.value.name,
      'surname': this.registrationForm.value.surname,
      'email': this.registrationForm.value.email,
      'password': this.registrationForm.value.password
    }
    this.authState.register(request);
    this.close.emit();
  }

  closeModal() {
    this.close.emit();
  }

}
