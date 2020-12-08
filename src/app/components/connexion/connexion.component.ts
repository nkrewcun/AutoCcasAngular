import {Component, OnInit} from '@angular/core';
import {Professionnel} from '../../models/professionnel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  professionnal: Professionnel;
  loginForm: FormGroup;
  isLoggedIn = false;
  hasLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.router.navigate(['/compte']);
    }
    this.professionnal = new Professionnel();
    this.loginForm = new FormGroup({
      email: new FormControl(this.professionnal.email, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.professionnal.password, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  submitLogin() {
    this.authService.login(this.professionnal).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.authService.getUser(data.token).subscribe(then => {
          this.tokenStorage.saveUser(then);
          this.hasLoginFailed = false;
          this.isLoggedIn = true;
          this.reloadPage();
        });
      },
      err => {
        this.errorMessage = err.error.message;
        this.hasLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
