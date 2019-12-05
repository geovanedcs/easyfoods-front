import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {TamanhoMarmita} from '../model/tamanho-marmita';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarmitaService extends BaseService<TamanhoMarmita> {

  constructor(protected http: HttpClient) {
    super(http, 'tamanho-marmita');
  }
}
