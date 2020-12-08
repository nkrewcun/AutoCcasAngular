import {Component, OnInit} from '@angular/core';
import {Annonce} from '../../models/annonce';
import {AnnonceService} from '../../services/annonce.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../services/token-storage.service';
import {Modele} from '../../models/modele';
import {Garage} from '../../models/garage';
import {TypeCarburant} from '../../models/type-carburant';
import {ModeleService} from '../../services/modele.service';
import {TypeCarburantService} from '../../services/type-carburant.service';
import {ProfessionnelService} from '../../services/professionnel.service';
import {Photo} from '../../models/photo';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.scss']
})
export class AddAnnonceComponent implements OnInit {

  isLoading: number;
  annonce: Annonce;
  modeles: Modele[] = [];
  garages: Garage[] = [];
  carburants: TypeCarburant[] = [];

  constructor(private annonceService: AnnonceService, private modeleService: ModeleService, private professionnelService: ProfessionnelService, private carburantService: TypeCarburantService, private router: Router, private token: TokenStorageService) {
  }

  ngOnInit(): void {
    this.isLoading = 0;
    this.annonce = new Annonce();
    this.modeleService.getAll().subscribe(then => {
      this.modeles = then['hydra:member'];
      this.isLoading++;
    });
    this.carburantService.getAll().subscribe(then => {
      this.carburants = then['hydra:member'];
      this.isLoading++;
    });
    this.professionnelService.getGaragesOfProfessionnel(this.token.getUser().id).subscribe(then => {
      this.garages = then['hydra:member'];
      this.isLoading++;
    });
  }

  addAnnonce() {
    const user = this.token.getUser();
    const date = new Date();
    const dateForRef = date.toISOString().slice(0, date.toISOString().indexOf('T')).split('-');
    this.annonce.datePublication = date;
    this.annonce.reference = user.prenom.charAt(0) + user.nom.charAt(0) + dateForRef[0].slice(-2) + dateForRef[1] + dateForRef[2];
    user.id.toString().length < 2 ? this.annonce.reference += '0' + user.id : this.annonce.reference += user.id;
    const photo = new Photo();
    photo.source = 'photo2500.jpg';
    photo.label = 'photo2500';
    this.annonce.photos = [photo];
    this.annonceService.addAnnonce(this.annonce).subscribe(then => {
      this.router.navigate(['/compte']);
    });
  }

  setModele($event) {
    this.annonce.modele = '/api/modeles/' + $event.currentTarget.value;
  }

  setCarburant($event) {
    this.annonce.carburant = '/api/type_carburants/' + $event.currentTarget.value;
  }

  setGarage($event) {
    this.annonce.garage = '/api/garages/' + $event.currentTarget.value;
  }

}
