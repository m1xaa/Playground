import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() openRegistration = new EventEmitter<void>();
  @Output() openLogin = new EventEmitter<void>();

  openLoginModal() {
    this.openLogin.emit();
  }

  openRegistrationModal() {
    this.openRegistration.emit();
  }
}
