import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Annonce} from '../models/annonce';
import {catchError, retry} from 'rxjs/operators';
import {SearchBar} from '../models/search-bar';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  filters: BehaviorSubject<NodeList> = new BehaviorSubject<NodeList>(null);
  searchBarValues: Observable<SearchBar>;

  apiUrl = 'http://localhost:8000/api/annonces/search';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<NodeList> {
    return this.filters.asObservable();
  }

  setFilter(nodeList: NodeList): void {
    this.filters.next(nodeList);
  }

  getSearchValues(): Observable<SearchBar> {
    return this.http.get<SearchBar>(this.apiUrl, this.httpOptions)
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
