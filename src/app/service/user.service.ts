import { Injectable } from '@angular/core';
import {TokenService} from "./token.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new Subject();

  constructor(private tokenService: TokenService) { }

  setToken(token: string) {
    this.tokenService.setToken(token);
  }

  getUser() {}

}
