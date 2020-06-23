import {Component, OnInit} from '@angular/core';
import {Annonce} from '../../models/annonce';
import {AnnonceService} from '../../services/annonce.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  annonces: Annonce[];

  constructor(private annonceService: AnnonceService) {
  }

  ngOnInit(): void {
    this.annonces = this.annonceService.getAll();
  }

}
