import {Modele} from './modele';

export class Annonce {
  id: number;
  modele: Modele;
  reference: string;
  titre: string;
  description: string;
  descriptionCourte: string;
  anneeMiseCirculation: number;
  kilometrage: number;
  prix: number;

  constructor(id: number = null,
              modele: Modele = null,
              reference: string = null,
              titre: string = null,
              description: string = null,
              descriptionCourte: string = null,
              anneeMiseCirculation: number = null,
              kilometrage: number = null,
              prix: number = null) {
    this.id = id;
    this.modele = modele;
    this.reference = reference;
    this.titre = titre;
    this.description = description;
    this.descriptionCourte = descriptionCourte;
    this.anneeMiseCirculation = anneeMiseCirculation;
    this.kilometrage = kilometrage;
    this.prix = prix;
  }
}
