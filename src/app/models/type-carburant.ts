import {Annonce} from './annonce';

export class TypeCarburant {
  id: number;
  nom: string;
  annonces: Annonce[];

  constructor(id: number = null, nom: string = null, annonces: Annonce[] = null) {
    this.id = id;
    this.nom = nom;
    this.annonces = annonces;
  }
}
