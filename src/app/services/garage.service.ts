import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Garage} from '../models/garage';
import {catchError, retry} from 'rxjs/operators';
import {Annonce} from '../models/annonce';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Professionnel} from '../models/professionnel';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  apiUrl = 'http://localhost:8000/api/garages';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAnnoncesOfGarage(id: number): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiUrl + '/' + id + '/annonces', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
