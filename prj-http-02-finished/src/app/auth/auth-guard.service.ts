import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterModule, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.user.pipe(take(1), map((user) => {
      if (user) {
        return true;
      } else {
        return this.router.createUrlTree(['/auth']);
      }
    }), )
  }
}
