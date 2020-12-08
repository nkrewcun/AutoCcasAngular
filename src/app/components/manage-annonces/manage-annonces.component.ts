import {Component, OnInit} from '@angular/core';
import {GarageService} from '../../services/garage.service';
import {ProfessionnelService} from '../../services/professionnel.service';
import {Garage} from '../../models/garage';
import {Annonce} from '../../models/annonce';
import {TokenStorageService} from '../../services/token-storage.service';
import {AnnonceService} from '../../services/annonce.service';

@Component({
  selector: 'app-manage-annonces',
  templateUrl: './manage-annonces.component.html',
  styleUrls: ['./manage-annonces.component.scss']
})
export class ManageAnnoncesComponent implements OnInit {

  isLoading: number;
  isDeleting = false;
  loadingEndedNumber: number;
  garages: Garage[];

  constructor(private garageService: GarageService, private professionnelService: ProfessionnelService, private annonceService: AnnonceService, private token: TokenStorageService) {
  }

  ngOnInit(): void {
    this.isLoading = 0;
    const user = this.token.getUser();
    this.professionnelService.getGaragesOfProfessionnel(this.token.getUser().id).subscribe(then => {
      this.garages = then['hydra:member'];
      this.loadingEndedNumber = this.garages.length;
      this.garages.forEach(garage => {
        this.garageService.getAnnoncesOfGarage(garage.id).subscribe(data => {
          garage.annonces = data['hydra:member'];
          this.isLoading++;
        });
      });
    });
  }

  deleteAnnonce(garageId: number, annonceId: number) {
    this.isDeleting = true;
    this.annonceService.removeById(annonceId).subscribe(() => {
      this.garageService.getAnnoncesOfGarage(garageId).subscribe(data => {
        this.garages.find(garage => {
          return garage.id === garageId;
        }).annonces = data['hydra:member'];
        this.isDeleting = false;
      });
    });
  }

}
