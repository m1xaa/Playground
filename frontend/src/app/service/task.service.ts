import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/as-is/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl: string = 'http://localhost:8000/api/v1/kids';

  constructor(private http: HttpClient) { }

  getAll(kidId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/${kidId}/tasks/`);
  }

  create(kidId: string): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/${kidId}/tasks/`, {});
  }
}
