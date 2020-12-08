import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private token: TokenStorageService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const jwtHelper = new JwtHelperService();
    const expectedRole = route.data.expectedRole;
    const token = this.token.getToken();
    if (token){
      const tokenPayload = jwtHelper.decodeToken(token);
      if (tokenPayload.roles.includes(expectedRole)) {
        return true;
      }
    }
    this.router.navigate(['/accueil']);
    return false;
  }

}
