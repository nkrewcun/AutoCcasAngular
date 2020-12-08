import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Professionnel} from '../models/professionnel';
import {Garage} from '../models/garage';

@Injectable({
  providedIn: 'root'
})
export class ProfessionnelService {

  professionnels: Observable<Professionnel[]>;

  apiUrl = 'http://localhost:8000/api/professionnels';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Professionnel[]> {
    this.professionnels = this.http.get<Professionnel[]>(this.apiUrl, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    return this.professionnels;
  }

  getProfessionnelById(id: number): Observable<Professionnel> {
    return this.http.get<Professionnel>(this.apiUrl + '/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addProfessionnel(annonce: Professionnel): Observable<Professionnel> {
    return this.http.post<Professionnel>(this.apiUrl, annonce, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  removeById(id: number): Observable<Professionnel> {
    return this.http.delete<Professionnel>(this.apiUrl + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  edit(annonceToUpdate: Professionnel): Observable<Professionnel> {
    return this.http.put<Professionnel>(this.apiUrl + '/' + annonceToUpdate.id, annonceToUpdate, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getGaragesOfProfessionnel(id: number): Observable<Garage[]> {
    return this.http.get<Garage[]>(this.apiUrl + '/' + id + '/garages', this.httpOptions)
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
