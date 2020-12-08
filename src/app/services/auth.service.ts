import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Professionnel} from '../models/professionnel';
import {TokenStorageService} from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:8000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'login_check', {
      username: credentials.email,
      password: credentials.password
    }, this.httpOptions);
  }

  register(professionnal: Professionnel): Observable<Professionnel> {
    return this.http.post<Professionnel>(this.apiUrl + 'register', {
      email: professionnal.email,
      password: professionnal.password,
      firstName: professionnal.prenom,
      lastName: professionnal.nom,
      siret: professionnal.numeroSiret
    }, this.httpOptions);
  }

  getUser(token: string): Observable<Professionnel> {
    this.httpOptions.headers.set('Authorization', 'Bearer' + token);

    return this.http.get<Professionnel>(this.apiUrl + 'api/user', this.httpOptions);
  }

}
