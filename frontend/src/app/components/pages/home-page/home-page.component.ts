import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { LoginComponent } from '../authorization/login/login.component';
import { RegistrationComponent } from '../authorization/registration/registration.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    RouterOutlet,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  showRegistrationModal = false;
  showLoginModal = false;

  openRegistrationModal() {
    this.showRegistrationModal = true;
  }

  closeRegistrationModal() {
    this.showRegistrationModal = false;
  }

  openLoginModal() {
    this.showLoginModal = true;
  }

  closeLoginModal() {
    this.showLoginModal = false;
  }
}
