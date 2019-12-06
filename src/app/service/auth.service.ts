import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {ApiResposta} from '../model/apiResposta';
import {Observable} from "rxjs";
import {UserService} from "./user.service";

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authenticate(cpf: string, senha: string): Observable<ApiResposta> {
    return this.http
      .post<ApiResposta>(API_URL +
        'auth',
        {cpf, senha}
      );
  }
}
