import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})

export class LoginComponentComponent {
  applyForm = new FormGroup( {
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private loginService: LoginServiceService, private router: Router) {}

  logIn(){
    if (!this.applyForm.valid){
      console.log("not valid");
      return;
    }

    this.loginService.logIn(this.applyForm.value.username ?? '',
      this.applyForm.value.password ?? '');
  }

  register() {
    this.router.navigate(['/register']);
  }
}
