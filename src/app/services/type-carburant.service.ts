import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Marque} from '../models/marque';
import {catchError, retry} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TypeCarburant} from '../models/type-carburant';

@Injectable({
  providedIn: 'root'
})
export class TypeCarburantService {

  apiUrl = 'http://localhost:8000/api/type_carburants';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<TypeCarburant[]> {
    return this.http.get<TypeCarburant[]>(this.apiUrl, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getTypeCarburantById(id: number): Observable<TypeCarburant> {
    return this.http.get<TypeCarburant>(this.apiUrl + '/' + id, this.httpOptions)
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
