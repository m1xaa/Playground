import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/auth/login-request';
import { RegistrationRequest } from '../models/auth/registration-request';
import { User } from '../models/as-is/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:8000/api/v1/auth';

  constructor(private readonly http: HttpClient) {}

  register(request: RegistrationRequest): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register/`, request);
  }

  login(request: LoginRequest): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login/`, request);
  }
}
