import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pedido} from "../model/pedido";

@Injectable({
  providedIn: 'root'
})
export class RelatorioService{
  private endpoint: string;

  constructor(protected http: HttpClient,
              endpoint: string) {
    this.endpoint = endpoint;
  }

  protected getUrl(): string {
    return `${environment.api_url}${this.endpoint}`;
  }

  totalMarmitaPeso(dataIni: Date, dataFim: Date, status: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.getUrl()}/totalMarmitaPeso?dataIni=${dataIni}&dataFim=${dataFim}&status=${status}`);
  }

  totalPedido(dataIni: Date, dataFim: Date, status: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.getUrl()}/totalPedido?dataIni=${dataIni}&dataFim=${dataFim}&status=${status}`);
  }

  listaPedidos(dataIni: Date, dataFim: Date, status: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.getUrl()}/listaPedidos?dataIni=${dataIni}&dataFim=${dataFim}&status=${status}`);
  }



}
