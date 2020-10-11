import {Modele} from './modele';
import {Garage} from './garage';
import {TypeCarburant} from './type-carburant';
import {Photo} from './photo';

export class Annonce {
  id: number;
  reference: string;
  titre: string;
  description: string;
  descriptionCourte: string;
  anneeMiseCirculation: number;
  kilometrage: number;
  prix: number;
  modele: Modele;
  datePublication: Date;
  garage: Garage;
  carburant: TypeCarburant;
  photos: Photo[];

  constructor(id: number = null,
              reference: string = null,
              titre: string = null,
              description: string = null,
              descriptionCourte: string = null,
              anneeMiseCirculation: number = null,
              kilometrage: number = null,
              prix: number = null,
              datePublication: Date = null,
              modele: Modele = null,
              garage: Garage = null,
              carburant: TypeCarburant = null,
              photos: Photo[] = null) {
    this.id = id;
    this.reference = reference;
    this.titre = titre;
    this.description = description;
    this.descriptionCourte = descriptionCourte;
    this.anneeMiseCirculation = anneeMiseCirculation;
    this.kilometrage = kilometrage;
    this.prix = prix;
    this.datePublication = datePublication;
    this.modele = modele;
    this.garage = garage;
    this.carburant = carburant;
    this.photos = photos;
  }
}
