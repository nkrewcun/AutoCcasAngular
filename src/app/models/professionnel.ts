import {Garage} from './garage';

export class Professionnel {
  id: number;
  email: string;
  roles: string[];
  password: string;
  nom: string;
  prenom: string;
  numeroSiret: string;
  garages: Garage[];

   constructor(id: number = null,
               email: string = null,
               roles: string[] = null,
               password: string = null,
               nom: string = null,
               prenom: string = null,
               numeroSiret: string = null,
               garages: Garage[] = null) {
    this.id = id;
    this.email = email;
    this.roles = roles;
    this.password = password;
    this.nom = nom;
    this.prenom = prenom;
    this.numeroSiret = numeroSiret;
    this.garages = garages;
  }
}
