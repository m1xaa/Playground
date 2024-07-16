import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { LoginComponent } from '../authorization/login/login.component';
import { RegistrationComponent } from '../authorization/registration/registration.component';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

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

  constructor(private router: Router, private authService: AuthService) {}

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

  logout() {
    if (localStorage.getItem('currentUser') != null) {
      localStorage.removeItem('currentUser');
    }
    this.router.navigate(['/']);
  }
}
