import {Component, OnInit} from '@angular/core';
import {Marque} from '../../models/marque';
import {MarqueService} from '../../services/marque.service';
import {ModeleService} from '../../services/modele.service';
import {Modele} from '../../models/modele';
import {SearchBarService} from '../../services/search-bar.service';
import {AnnonceService} from '../../services/annonce.service';
import {Annonce} from '../../models/annonce';
import {TypeCarburantService} from '../../services/type-carburant.service';
import {TypeCarburant} from '../../models/type-carburant';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  isLoading: number;
  marques: Marque[];
  modeles: Modele[] = [];
  carburants: TypeCarburant[];
  annonces: Annonce[];
  filteredModeles: Modele[];
  prices: Array<number> = [];
  kilometrages: Array<number> = [];
  anneesMiseCirculation: Array<number> = [];
  isModeleDisabled = true;

  constructor(private marqueService: MarqueService,
              private modeleService: ModeleService,
              private carburantService: TypeCarburantService,
              private annonceService: AnnonceService,
              private searchBarService: SearchBarService) {
  }

  ngOnInit(): void {
    this.isLoading = 0;
    this.marqueService.getAll().subscribe(then => {
      this.marques = then['hydra:member'];
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
    this.searchBarService.getSearchValues().subscribe(then => {
      const searchValues = then;
      console.log(searchValues);
      const maxPrice = searchValues.prixMax;
      const maxKilometrage = searchValues.kilometrageMax;
      const maxAnneeMiseCirculation = searchValues.anneeCirculationMax;
      const minAnneeMiseCirculation = searchValues.anneeCirculationMin;
      let i: number;
      for (i = 0; i < maxPrice; i += 5000) {
        this.prices.push(i);
        if (i >= 20000) {
          i += 5000;
        }
      }
      this.prices.push(i);
      for (i = 0; i < maxKilometrage; i += 10000) {
        this.kilometrages.push(i);
        if (i === 10000) {
          i += 30000;
        } else if (i > 10000) {
          i += 40000;
        }
      }
      this.kilometrages.push(i);
      i = Math.floor(minAnneeMiseCirculation / 10) * 10;
      for (i; i < maxAnneeMiseCirculation; i += 10) {
        this.anneesMiseCirculation.push(i);
      }
      this.anneesMiseCirculation.push(maxAnneeMiseCirculation);
      this.isLoading++;
    });
  }

  setFilter($event) {
    const filters = document.querySelectorAll('select');
    this.searchBarService.setFilter(filters);
    if ($event.currentTarget.id === 'marque') {
      this.enableSelectModele($event);
    }
  }

  enableSelectModele($event) {
    if ($event.currentTarget.value) {
      this.filteredModeles = this.modeleService.getModelesByMarqueId(this.modeles, +$event.currentTarget.value);
      this.isModeleDisabled = false;
    } else {
      this.filteredModeles = [];
      this.isModeleDisabled = true;
    }
  }
}
