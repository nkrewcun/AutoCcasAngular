import {Injectable} from '@angular/core';
import {Marque} from '../models/marque';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  marques: Marque[] = [
    new Marque(1, 'Renault'),
    new Marque(2, 'Peugeot'),
    new Marque(3, 'Citroën'),
    new Marque(4, 'Audi'),
    new Marque(5, 'Volkswagen'),
    new Marque(6, 'Opel')
  ];

  apiUrl = 'http://localhost:8000/api/marques';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Marque[]> {
    return this.http.get<Marque[]>(this.apiUrl, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getMarqueById(id: number): Observable<Marque> {
    return this.http.get<Marque>(this.apiUrl + '/' + id, this.httpOptions)
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
