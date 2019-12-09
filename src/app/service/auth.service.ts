import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiResposta} from '../model/apiResposta';
import {Observable} from 'rxjs';

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
