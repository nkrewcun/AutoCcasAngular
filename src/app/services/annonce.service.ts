import {Injectable} from '@angular/core';
import {Annonce} from '../models/annonce';
import {ModeleService} from './modele.service';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  annonces: Annonce[] = [];

  constructor(private modeleService: ModeleService) {
    const max = Math.floor(200 + Math.random() * 100);
    for (let i = 1; i < max; i++) {
      let annonce = new Annonce();
      annonce.id = i;
      annonce.modele = this.modeleService.getModeleById(Math.floor(1 + Math.random() * this.modeleService.getAll().length));
      annonce.reference = Math.random().toString(36).toUpperCase();
      annonce.titre = Math.random().toString(36).toUpperCase();
      annonce.description = Math.random().toString(36).repeat(10);
      annonce.descriptionCourte = Math.random().toString(36).repeat(2);
      annonce.kilometrage = Math.floor(1000 + Math.random() * 199000);
      annonce.prix = Math.floor(500 + Math.random() * 19500);
      this.annonces.push(annonce);
    }
  }

  getAll(): Annonce[] {
    return this.annonces;
  }

  getAnnonceById(id) {
    return this.annonces.find(annonce => annonce.id === id);
  }
}
