import { Component, OnInit } from '@angular/core';
import {Professionnel} from '../../models/professionnel';
import {TokenStorageService} from '../../services/token-storage.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProfessionnelService} from '../../services/professionnel.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-professionnel',
  templateUrl: './edit-professionnel.component.html',
  styleUrls: ['./edit-professionnel.component.scss']
})
export class EditProfessionnelComponent implements OnInit {

  currentUser: Professionnel;
  userForm: FormGroup;

  constructor(private tokenStorage: TokenStorageService, private professionnelService: ProfessionnelService, private router: Router) {
  }

  ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
    this.userForm = new FormGroup({
      email: new FormControl(this.currentUser.email, [
        Validators.required,
        Validators.email
      ]),
      nom: new FormControl(this.currentUser.nom, [
        Validators.required,
      ]),
      prenom: new FormControl(this.currentUser.prenom, [
        Validators.required,
      ]),
      siret: new FormControl(this.currentUser.numeroSiret, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14)
      ]),
    });
  }

  editProfile() {
    this.professionnelService.edit(this.currentUser).subscribe(then => {
      this.tokenStorage.signOut();
      this.router.navigate(['/connexion']);
    });
  }

}
