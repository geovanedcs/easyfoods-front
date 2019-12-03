import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Comida} from '../model/comida';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComidaService extends BaseService<Comida> {

  constructor(protected http: HttpClient) {
    super(http, 'comida');
  }
}
