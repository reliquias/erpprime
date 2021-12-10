import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  // inject the route and the authentification service
constructor(
  private router: Router,
  private authenticationService: AuthService
) { }

// define the canActivate function
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  const currentUser = this.authenticationService.currentUserValue;
  if (currentUser) {
    // here we need to use the passed object role
      if (route.data.roles && route.data.roles.indexOf(currentUser.roleUser) === -1) {
          // role not authorised so redirect to home page
          this.router.navigate(['home']);
          return false;
      }

      // authorised so return true
      return true;
  }

  // not logged in so redirect to login page with the return url
  this.router.navigate([''], { queryParams: { returnUrl: state.url } });
  return false;
  }

}
