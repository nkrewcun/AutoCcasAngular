import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  filters: BehaviorSubject<NodeList> = new BehaviorSubject<NodeList>(null);

  constructor() {
  }

  getAll(): Observable<NodeList> {
    return this.filters.asObservable();
  }

  setFilter(nodeList: NodeList): void {
    this.filters.next(nodeList);
  }
}
