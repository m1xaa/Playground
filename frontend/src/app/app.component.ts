import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginComponent } from './components/pages/authorization/login/login.component';
import { RegistrationComponent } from './components/pages/authorization/registration/registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomePageComponent,
    HttpClientModule,
    CommonModule,
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

}
