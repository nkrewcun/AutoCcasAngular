import {Modele} from './modele';

export class Marque {
  id: number;
  nom: string;
  modeles: Modele[];

  constructor(id: number = null, nom: string = null, modeles: Modele[] = null) {
    this.id = id;
    this.nom = nom;
    this.modeles = modeles;
  }
}
