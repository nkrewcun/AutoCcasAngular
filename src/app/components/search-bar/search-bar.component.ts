import {Component, OnInit} from '@angular/core';
import {Marque} from '../../models/marque';
import {MarqueService} from '../../services/marque.service';
import {ModeleService} from '../../services/modele.service';
import {Modele} from '../../models/modele';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  marques: Marque[];
  modeles: Modele[];
  isModeleDisabled = true;

  constructor(private marqueService: MarqueService, private modeleService: ModeleService) {
  }

  ngOnInit(): void {
    this.marques = this.marqueService.getAll();
    this.modeles = [];
  }

  filterModele($event) {
    if ($event.currentTarget.value) {
      this.modeles = this.modeleService.getModelesByMarqueId(+$event.currentTarget.value);
      this.isModeleDisabled = false;
    } else {
      this.modeles = [];
      this.isModeleDisabled = true;
    }
  }
}
