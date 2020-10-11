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

  constructor(private annonceService: AnnonceService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.annonceService.getAnnonceById(id).subscribe((data: Annonce) => {
      this.annonce = data;
      this.isLoading = false;
    });
  }

}
