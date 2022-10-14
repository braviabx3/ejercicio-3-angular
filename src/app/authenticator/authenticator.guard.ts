import { AuthenticatorService } from './authenticator.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorGuard implements CanActivate {
  constructor(private authenticatorService: AuthenticatorService) { }

  canActivate() {
    return this.authenticatorService.isAuthenticated;
  }
}
