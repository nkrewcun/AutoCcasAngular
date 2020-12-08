import {Component} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {TokenStorageService} from './services/token-storage.service';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AutoCcasAngular';

  showNavbar = true;

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        event.url === '/connexion' ? this.showNavbar = false : this.showNavbar = true;
      }
    });
  }
}
