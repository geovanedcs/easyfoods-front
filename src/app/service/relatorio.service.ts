import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Pedido} from "../model/pedido";
import {ListaPedidos} from "../model/relatorio/listaPedidos";
import {TotalMarmitaPeso} from "../model/relatorio/totalMarmitaPeso";
import {TotalPedido} from "../model/relatorio/totalPedido";
import {MenuItem} from "primeng";

@Injectable({
  providedIn: 'root'
})
export class RelatorioService{
  relatorioList: MenuItem[];

  constructor(protected http: HttpClient) {
    this.relatorioList = [
      {
        label: 'Pedidos',
        routerLink: '/relatorio/ListaPedidos',
        icon: 'pi pi-home'
      },
    ];
  }

  //Menu


  //Do back
  protected getUrl(): string {
    return `${environment.api_url}relatorio/`;
  }

  totalMarmitaPeso(dataIni: Date, dataFim: Date, status: string): Observable<TotalMarmitaPeso[]> {
    return this.http.get<TotalMarmitaPeso[]>(`${this.getUrl()}totalMarmitaPeso?dataIni=${dataIni}&dataFim=${dataFim}&status=${status}`);
  }

  totalPedido(dataIni: Date, dataFim: Date, status: string): Observable<TotalPedido> {
    return this.http.get<TotalPedido>(`${this.getUrl()}totalPedido?dataIni=${dataIni}&dataFim=${dataFim}&status=${status}`);
  }

  listaPedidos(dataIni: Date, dataFim: Date, status: string): Observable<ListaPedidos[]> {
    return this.http.get<ListaPedidos[]>(`${this.getUrl()}listaPedidos?dataIni=${dataIni}&dataFim=${dataFim}&status=${status}`);
  }



}
