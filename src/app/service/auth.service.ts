import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API_URL = 'http://localhost:4200';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authenticate(cpf: string, password: string) {
    return this.http
      .post(API_URL +
        '/user/login',
        { cpf, password },
        {observe: 'response'}
      );
  }
}
