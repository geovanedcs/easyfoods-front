import {EventEmitter, Injectable, Output} from '@angular/core';
import {TokenService} from './token.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Sujeito} from '../model/sujeito';
import * as jwt_decode from 'jwt-decode';
import {AuthService} from "./auth.service";
import {ClienteService} from "./cliente.service";
import {Cliente} from "../model/cliente";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<Sujeito>(null);
  private userID: number;
  private user: Observable<Cliente>;

  constructor(private tokenService: TokenService, private authService: AuthService, private clienteService: ClienteService) {
    this.tokenService.hasToken() &&
    this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const idUsuario = jwt_decode(token) as Sujeito;
    this.userID = idUsuario.sub;
    this.user = this.clienteService.findOne(this.userID);
    this.getUser().subscribe(res => AuthService.role = res.perfis[0].nome);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
    this.authService.logOn.emit(false);
    AuthService.role = '';
    this.user = undefined;
  }

  getUser(): Observable<Cliente> {
     return this.user;
  }

  getUserID() {
    return this.userID;
  }

}
