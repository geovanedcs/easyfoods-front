import { Injectable } from '@angular/core';
import {TokenService} from "./token.service";
import {BehaviorSubject} from "rxjs";
import {Sujeito} from "../model/sujeito";
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<Sujeito>(null);

  constructor(private tokenService: TokenService) {
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
    this.userSubject.next(idUsuario);
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  getUser() {
    return this.userSubject.asObservable();
  }

}
