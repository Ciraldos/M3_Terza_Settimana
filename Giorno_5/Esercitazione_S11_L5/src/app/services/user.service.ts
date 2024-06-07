import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iUser } from '../models/i-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<iUser[]> {
    return this.http.get<iUser[]>(this.apiUrl);
  }
}
