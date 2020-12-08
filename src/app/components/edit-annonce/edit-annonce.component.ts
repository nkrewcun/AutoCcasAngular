import { Component, OnInit } from '@angular/core';
import {Annonce} from '../../models/annonce';
import {Modele} from '../../models/modele';
import {Garage} from '../../models/garage';
import {TypeCarburant} from '../../models/type-carburant';
import {AnnonceService} from '../../services/annonce.service';
import {ModeleService} from '../../services/modele.service';
import {ProfessionnelService} from '../../services/professionnel.service';
import {TypeCarburantService} from '../../services/type-carburant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../services/token-storage.service';
import {Photo} from '../../models/photo';

@Component({
  selector: 'app-edit-annonce',
  templateUrl: './edit-annonce.component.html',
  styleUrls: ['./edit-annonce.component.scss']
})
export class EditAnnonceComponent implements OnInit {

  isLoading: number;
  annonce: Annonce;
  modeles: Modele[] = [];
  garages: Garage[] = [];
  carburants: TypeCarburant[] = [];

  constructor(private annonceService: AnnonceService, private modeleService: ModeleService, private professionnelService: ProfessionnelService, private carburantService: TypeCarburantService, private router: Router, private token: TokenStorageService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isLoading = 0;
    const id = +this.route.snapshot.paramMap.get('id');
    this.annonceService.getAnnonceForEditById(id).subscribe(then => {
      this.annonce = then;
      this.isLoading++;
    });
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

  editAnnonce() {
    this.annonceService.edit(this.annonce).subscribe(then => {
      this.router.navigate(['/compte/annonces']);
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
