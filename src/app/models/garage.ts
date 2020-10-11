import {Adresse} from './adresse';
import {Professionnel} from './professionnel';
import {Annonce} from './annonce';

export class Garage {
  id: number;
  nom: string;
  numeroTel: string;
  adresse: Adresse;
  professionnel: Professionnel;
  annonces: Annonce[];

  constructor(id: number = null,
              nom: string = null,
              numeroTel: string = null,
              adresse: Adresse = null,
              professionnel: Professionnel = null,
              annonces: Annonce[] = null) {
    this.id = id;
    this.nom = nom;
    this.numeroTel = numeroTel;
    this.adresse = adresse;
    this.professionnel = professionnel;
    this.annonces = annonces;
  }
}
