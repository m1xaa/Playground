import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() openRegistration = new EventEmitter<void>();
  @Output() openLogin = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  openLoginModal() {
    this.openLogin.emit();
  }

  openRegistrationModal() {
    this.openRegistration.emit();
  }

  logoutClick() {
    this.logout.emit();
  }

  isUserRegistered() {
    return localStorage.getItem('currentUser') != null
  }
}
