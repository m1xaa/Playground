import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { RegistrationRequest } from '../models/auth/registration-request';
import { LoginRequest } from '../models/auth/login-request';
import { User } from '../models/as-is/user';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  currentUserKey = 'currentUser';

  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  register(request: RegistrationRequest): void {
    this.authService.register(request).subscribe({
      next: (response) => {
        const user = response
        this.storeCurrentUser(user);
        this.router.navigate(['parent']);
      },
      error: (error) => {
        this.handleError(error);
        // console.log(error.error.email.at(0) === 'user with this email already exists.');
      }
    });
  }

  login(request: LoginRequest): void {
    this.authService.login(request).subscribe({
      next: (response) => {
        const user = response
        this.storeCurrentUser(user);
        this.router.navigate(['parent']);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }

  getCurrentUser(): User {
    const userJson = localStorage.getItem(this.currentUserKey);
    return userJson ? JSON.parse(userJson) : null;
  }

  logout(): void {
    localStorage.removeItem(this.currentUserKey);
  }

  private storeCurrentUser(user: User): void {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }

  private handleError(error: any): void {
    let errorMessage;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
  }
}
