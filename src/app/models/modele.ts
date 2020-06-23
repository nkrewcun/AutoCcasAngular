import {Marque} from './marque';

export class Modele {
  id: number;
  marque: Marque;
  nom: string;

  constructor(id: number = null, marque: Marque = null, nom: string = null) {
    this.id = id;
    this.marque = marque;
    this.nom = nom;
  }
}
