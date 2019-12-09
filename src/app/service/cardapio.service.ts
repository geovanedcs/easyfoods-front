import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Cardapio} from '../model/cardapio';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardapioService extends BaseService<Cardapio> {

  constructor(protected http: HttpClient) {
    super(http, 'cardapio');
  }

}
