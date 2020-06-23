import {Injectable} from '@angular/core';
import {Modele} from '../models/modele';
import {MarqueService} from './marque.service';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {

  modeles: Modele[];

  constructor(private marqueService: MarqueService) {
    this.modeles = [
      new Modele(1, this.marqueService.getMarqueById(1), 'Twingo'),
      new Modele(2, this.marqueService.getMarqueById(1), 'Scenic'),
      new Modele(3, this.marqueService.getMarqueById(1), 'Clio'),
      new Modele(4, this.marqueService.getMarqueById(2), '308'),
      new Modele(5, this.marqueService.getMarqueById(2), '508'),
      new Modele(6, this.marqueService.getMarqueById(2), '3008'),
      new Modele(7, this.marqueService.getMarqueById(3), 'C3'),
      new Modele(8, this.marqueService.getMarqueById(3), 'C4'),
      new Modele(9, this.marqueService.getMarqueById(3), 'C5'),
      new Modele(10, this.marqueService.getMarqueById(4), 'A4'),
      new Modele(11, this.marqueService.getMarqueById(4), 'Q7'),
      new Modele(12, this.marqueService.getMarqueById(4), 'TT'),
      new Modele(13, this.marqueService.getMarqueById(5), 'Polo'),
      new Modele(14, this.marqueService.getMarqueById(5), 'Golf'),
      new Modele(15, this.marqueService.getMarqueById(5), 'Touran'),
      new Modele(16, this.marqueService.getMarqueById(6), 'Corsa'),
      new Modele(17, this.marqueService.getMarqueById(6), 'Astra'),
      new Modele(18, this.marqueService.getMarqueById(6), 'Crossland'),
    ];
  }

  getAll(): Modele[] {
    return this.modeles;
  }

  getModeleById(id): Modele {
    return this.modeles.find(modele => modele.id === id);
  }

  getModelesByMarqueId(id: number): Modele[] {
    return this.modeles.filter(modele => modele.marque.id === id);
  }
}
