import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Ingrediente} from '../model/ingrediente';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService extends BaseService<Ingrediente> {

  constructor(protected  http: HttpClient) {
    super(http, 'ingrediente' );
  }
}
