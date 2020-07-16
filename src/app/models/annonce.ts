import {Modele} from './modele';

export class Annonce {
  id: number;
  reference: string;
  modele: Modele;
  titre: string;
  description: string;
  descriptionCourte: string;
  anneeMiseCirculation: number;
  kilometrage: number;
  prix: number;
  datePublication: Date;

  constructor(id: number = null,
              modele: Modele = null,
              reference: string = null,
              titre: string = null,
              description: string = null,
              descriptionCourte: string = null,
              anneeMiseCirculation: number = null,
              kilometrage: number = null,
              prix: number = null,
              datePublication: Date = null) {
    this.id = id;
    this.modele = modele;
    this.reference = reference;
    this.titre = titre;
    this.description = description;
    this.descriptionCourte = descriptionCourte;
    this.anneeMiseCirculation = anneeMiseCirculation;
    this.kilometrage = kilometrage;
    this.prix = prix;
    this.datePublication = datePublication;
  }
}
