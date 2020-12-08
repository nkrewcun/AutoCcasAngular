import {Component, OnInit} from '@angular/core';
import {Annonce} from '../../models/annonce';
import {SearchBarService} from '../../services/search-bar.service';
import {AnnonceService} from '../../services/annonce.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  annonces: Annonce[];
  filteredAnnonces: Annonce[];
  isLoading: boolean;

  constructor(private annonceService: AnnonceService, private searchBarService: SearchBarService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.annonceService.getAll().subscribe(then => {
      this.annonces = then['hydra:member'];
      this.filteredAnnonces = this.annonces;
      this.isLoading = false;
    });
    this.searchBarService.getAll().subscribe(data => {
      let filters;
      if (data) {
        this.filteredAnnonces = this.annonces;
        filters = data;
        filters.forEach(filter => {
          this.filteredAnnonces = this.annonceService.filter(this.filteredAnnonces, filter);
        });
      }
    });
  }
}
