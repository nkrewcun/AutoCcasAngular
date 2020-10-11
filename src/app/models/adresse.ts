import {Garage} from './garage';

export class Adresse {
  id: number;
  ligne1: string;
  ligne2: string;
  ligne3: string;
  codePostal: string;
  commune: string;
  garages: Garage[];

  constructor(id: number = null,
              ligne1: string = null,
              ligne2: string = null,
              ligne3: string = null,
              codePostal: string = null,
              commune: string = null,
              garages: Garage[] = null) {
    this.id = id;
    this.ligne1 = ligne1;
    this.ligne2 = ligne2;
    this.ligne3 = ligne3;
    this.codePostal = codePostal;
    this.commune = commune;
    this.garages = garages;
  }
}
