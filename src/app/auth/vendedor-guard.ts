import {Injectable} from '@angular/core';
import {UserService} from "../service/user.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {map, take} from "rxjs/operators";
import {AuthService} from "../service/auth.service";

@Injectable({providedIn: 'root'})
export class VendedorGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {

  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userService.isLogged() && (AuthService.role === 'Vendedor' || AuthService.role === 'Administrador')) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
