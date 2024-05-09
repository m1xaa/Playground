import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private router: Router, private registrationService: RegistrationService) {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  register(){
    if(!this.registerForm.valid){
      return;
    }
    this.registrationService.register(this.registerForm.value.name ?? "",
    this.registerForm.value.surname ?? "", this.registerForm.value.age ?? "",
  this.registerForm.value.username ?? "", this.registerForm.value.password ?? "");
  }
}