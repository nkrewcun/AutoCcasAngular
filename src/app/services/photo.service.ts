import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Marque} from '../models/marque';
import {catchError, retry} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Photo} from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiUrl = 'http://localhost:8000/api/photos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.apiUrl, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getMarqueById(id: number): Observable<Photo> {
    return this.http.get<Photo>(this.apiUrl + '/' + id, this.httpOptions)
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
