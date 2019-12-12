import { Component, OnInit } from '@angular/core';
import {ListaPedidos} from "../../model/relatorio/listaPedidos";
import {TotalMarmitaPeso} from "../../model/relatorio/totalMarmitaPeso";
import {TotalPedido} from "../../model/relatorio/totalPedido";
import {RelatorioService} from "../../service/relatorio.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.scss']
})
export class ListaPedidosComponent implements OnInit {

  listaPedidos: ListaPedidos[];
  totalMarmitaPeso: TotalMarmitaPeso[];
  totalPedido: TotalPedido;
  listaStatus: any[];

  //Filtros
  dataIni: Date;
  dataFim: Date;
  status: number;

  constructor(private relatorioService: RelatorioService,
              private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Lista de Pedidos');
    this.listaStatus = [
      {field: 0, header: "Cancelado"},
      {field: 1, header: "Solicitado"},
      {field: 2, header: "Pendente"},
      {field: 3, header: "Pago"}
    ];
  }

  relatorioPedidos(): void {
    this.relatorioService.listaPedidos(this.dataIni, this.dataIni, this.status).subscribe(res => {
      this.listaPedidos = res;
    });
    this.relatorioService.totalMarmitaPeso(this.dataIni, this.dataIni, this.status).subscribe(res => {
      this.totalMarmitaPeso = res;
    });
    this.relatorioService.totalPedido(this.dataIni, this.dataIni, this.status).subscribe(res => {
      this.totalPedido = res;
    });
  }

}
