import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  userRoles: string[] = [];

  constructor(private token: TokenStorageService) {
  }

  ngOnInit(): void {
    const jwtHelper = new JwtHelperService();
    const token = this.token.getToken();
    if (token) {
      this.userRoles = jwtHelper.decodeToken(token).roles;
    }
  }

  logout(): void {
    this.token.signOut();
    window.location.reload();
  }
}
