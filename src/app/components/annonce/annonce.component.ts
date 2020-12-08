import {Component, OnInit} from '@angular/core';
import {Annonce} from '../../models/annonce';
import {AnnonceService} from '../../services/annonce.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit {

  annonce: Annonce;
  isLoading: boolean;
  isViewedFromAccount: boolean

  constructor(private annonceService: AnnonceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    window.location.pathname === '/compte/annonces/' + id ? this.isViewedFromAccount = true : this.isViewedFromAccount = false;
    this.annonceService.getAnnonceById(id).subscribe((data: Annonce) => {
      this.annonce = data;
      this.isLoading = false;
    });
  }

}
