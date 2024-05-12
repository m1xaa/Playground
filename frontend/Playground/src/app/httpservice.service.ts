import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './objects/user';
import { Person } from './objects/person';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  private baseURL = "http://127.0.0.1:8000/"

  constructor(private http: HttpClient) { }

  register(user: User, person: Person): Observable<any> {
    const data = { user, person };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    
    // Return the Observable for the caller to subscribe to
    return this.http.post<any>(this.baseURL + "authentication/", data, { headers });
  }

  login(user: User): Observable<any> {
    const data = {"user": user}
    return this.http.get<any>(this.baseURL + "authentication/login/");
  }
}
