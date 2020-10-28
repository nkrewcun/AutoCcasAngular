import {Marque} from './marque';
import {Annonce} from './annonce';

export class Modele {
  id: number;
  marque: any;
  nom: string;
  annonces: Annonce[];

  constructor(id: number = null, marque: Marque = null, nom: string = null, annonces: Annonce[] = null) {
    this.id = id;
    this.marque = marque;
    this.nom = nom;
    this.annonces = annonces;
  }
}
