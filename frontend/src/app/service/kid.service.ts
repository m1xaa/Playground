import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kid } from '../models/as-is/kid';
import { CreateKidRequest } from '../models/kid/create-kid-request';
import { UpdateKidRequest } from '../models/kid/update-kid-request';

@Injectable({
  providedIn: 'root'
})
export class KidService {

  baseUrl: string = 'http://localhost:8000/api/v1/parents';

  constructor(private http: HttpClient) { }

  get(parentId: string, id: string): Observable<Kid> {
    return this.http.get<Kid>(`${this.baseUrl}/${parentId}/kids/${id}`);
  }

  getAll(parentId: string): Observable<Kid[]> {
    return this.http.get<Kid[]>(`${this.baseUrl}/${parentId}/kids/`);
  }

  create(parentId: string, createKidRequest: CreateKidRequest): Observable<Kid> {
    return this.http.post<Kid>(`${this.baseUrl}/${parentId}/kids/`, createKidRequest);
  }

  update(parentId: string, updateKidRequest: UpdateKidRequest, id: string): Observable<Kid> {
    return this.http.put<Kid>(`${this.baseUrl}/${parentId}/kids/${id}/`, updateKidRequest);
  }

  delete(parentId: string, id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${parentId}/kids/${id}/`);
  }
}
