import {Component, OnInit} from '@angular/core';
import {Marque} from '../../models/marque';
import {MarqueService} from '../../services/marque.service';
import {ModeleService} from '../../services/modele.service';
import {Modele} from '../../models/modele';
import {SearchBarService} from '../../services/search-bar.service';
import {AnnonceService} from '../../services/annonce.service';
import {Annonce} from '../../models/annonce';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  marques: Marque[];
  modeles: Modele[] = [];
  annonces: Annonce[];
  filteredModeles: Modele[];
  prices: Array<number> = [];
  kilometrages: Array<number> = [];
  isModeleDisabled = true;

  constructor(private marqueService: MarqueService,
              private modeleService: ModeleService,
              private annonceService: AnnonceService,
              private searchBarService: SearchBarService) {
  }

  ngOnInit(): void {
    this.marqueService.getAll().subscribe((data: Marque[]) => {
      this.marques = data;
    });
    this.modeleService.getAll().subscribe((data: Modele[]) => {
      this.modeles = data;
    });
    this.annonceService.getAll().subscribe((data: Annonce[]) => {
      this.annonces = data;
      const maxPrice = this.annonceService.getMaximumPrice(this.annonces);
      const maxKilometrage = this.annonceService.getMaximumKilometrage(this.annonces);
      let i = 0;
      for (i; i < maxPrice; i += 5000) {
        this.prices.push(i);
        if (i >= 20000) {
          i += 5000;
        }
      }
      this.prices.push(i);
      i = 0;
      for (i; i < maxKilometrage; i += 10000) {
        this.kilometrages.push(i);
        if (i === 10000) {
          i += 30000;
        } else if (i > 10000) {
          i += 40000;
        }
      }
      this.kilometrages.push(i);
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
