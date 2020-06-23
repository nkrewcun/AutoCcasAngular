import {Injectable} from '@angular/core';
import {Marque} from '../models/marque';

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

  constructor() {
  }

  getAll(): Marque[] {
    return this.marques;
  }

  getMarqueById(id): Marque {
    return this.marques.find(marque => marque.id === id);
  }
}
