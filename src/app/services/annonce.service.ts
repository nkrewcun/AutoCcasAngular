import {Injectable} from '@angular/core';
import {Annonce} from '../models/annonce';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  annonces: Observable<Annonce[]>;

  apiUrl = 'http://localhost:8000/api/annonces';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Annonce[]> {
    this.annonces = this.http.get<Annonce[]>(this.apiUrl + '?order[datePublication]=desc', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    return this.annonces;
  }

  getAnnonceById(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(this.apiUrl + '/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getAnnonceForEditById(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(this.apiUrl + '/for_edit/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addAnnonce(annonce: Annonce): Observable<Annonce> {
    return this.http.post<Annonce>(this.apiUrl, annonce, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  removeById(id: number): Observable<Annonce> {
    return this.http.delete<Annonce>(this.apiUrl + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  edit(annonceToUpdate: Annonce): Observable<Annonce> {
    return this.http.put<Annonce>(this.apiUrl + '/' + annonceToUpdate.id, annonceToUpdate, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getMinimumPrice(annonces: Annonce[]): number {
    return Math.min.apply(Math, annonces.map(annonce => {
      return annonce.prix;
    }));
  }

  getMaximumPrice(annonces: Annonce[]): number {
    return Math.max.apply(Math, annonces.map(annonce => {
      return annonce.prix;
    }));
  }

  getMinimumKilometrage(annonces: Annonce[]): number {
    return Math.min.apply(Math, annonces.map(annonce => {
      return annonce.kilometrage;
    }));
  }

  getMaximumKilometrage(annonces: Annonce[]): number {
    return Math.max.apply(Math, annonces.map(annonce => {
      return annonce.kilometrage;
    }));
  }

  getMinimumAnneeMiseCirculation(annonces: Annonce[]): number {
    return Math.min.apply(Math, annonces.map(annonce => {
      return annonce.anneeMiseCirculation;
    }));
  }

  getMaximumAnneeMiseCirculation(annonces: Annonce[]): number {
    return Math.max.apply(Math, annonces.map(annonce => {
      return annonce.anneeMiseCirculation;
    }));
  }

  /**
   *
   * @param annoncesToFilter Les annonces à filtrer
   * @param filter les filtres sélectionnés
   */
  filter(annoncesToFilter, filter: Node): Annonce[] {
    const select = filter as HTMLSelectElement;
    if (select.value) {
      switch (select.id) {
        case 'marque':
          return annoncesToFilter.filter(annonce => annonce.modele.marque.id === +select.value);
          break;
        case 'modele':
          return annoncesToFilter.filter(annonce => annonce.modele.id === +select.value);
          break;
        case 'prix':
          return annoncesToFilter.filter(annonce => {
            const priceRange = select.value.split('-');
            return annonce.prix >= +priceRange[0] && annonce.prix <= +priceRange[1];
          });
          break;
        case 'kilometrage':
          return annoncesToFilter.filter(annonce => {
            const kmRange = select.value.split('-');
            return annonce.kilometrage >= +kmRange[0] && annonce.kilometrage <= +kmRange[1];
          });
          break;
        case 'annee' :
          return annoncesToFilter.filter(annonce => {
            const anneeCirculationRange = select.value.split('-');
            return annonce.anneeMiseCirculation >= +anneeCirculationRange[0] && annonce.anneeMiseCirculation <= +anneeCirculationRange[1];
          });
          break;
        case 'carburant' :
          return annoncesToFilter.filter((annonce: Annonce) => annonce.carburant.id === +select.value);
          break;
      }
    } else if (select.id === 'marque') {
      const modele = document.getElementById('modele') as HTMLSelectElement;
      modele.value = '';
    }
    return annoncesToFilter;
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
