import {Component, OnInit} from '@angular/core';
import {Annonce} from '../../models/annonce';
import {SearchBarService} from '../../services/search-bar.service';
import {AnnonceService} from '../../services/annonce.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  annonces: Annonce[];
  filteredAnnonces: Annonce[];

  constructor(private annonceService: AnnonceService, private searchBarService: SearchBarService) {
  }

  ngOnInit(): void {
    this.annonceService.getAll().subscribe((data: Annonce[]) => {
      this.annonces = data;
      this.filteredAnnonces = this.annonces;
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
