import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Pedido} from '../model/pedido';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PedidoService extends BaseService<Pedido> {

  constructor(protected http: HttpClient) {
    super(http, 'pedido');
  }

  findPedidoByCliente(id: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.getUrl()}/cliente?id=${id}`);
  }
}
