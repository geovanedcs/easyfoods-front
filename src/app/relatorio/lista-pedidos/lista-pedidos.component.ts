import { Component, OnInit } from '@angular/core';
import {ListaPedidos} from '../../model/relatorio/listaPedidos';
import {TotalMarmitaPeso} from '../../model/relatorio/totalMarmitaPeso';
import {TotalPedido} from '../../model/relatorio/totalPedido';
import {RelatorioService} from '../../service/relatorio.service';
import {Title} from '@angular/platform-browser';

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
  colPeso: any[];
  colPedido: any[];

  // Filtros
  dataIni: Date;
  dataFim: Date;
  status: number;
  display = false;

  constructor(private relatorioService: RelatorioService,
              private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Lista de Pedidos');
    this.listaStatus = [
      {value: 'CANCELADO', label: 'Cancelado'},
      {value: 'SOLICITADO', label: 'Solicitado'},
      {value: 'PENDENTE', label: 'Pendente'},
      {value: 'PAGO', label: 'Pago'}
    ];
    this.colPeso = [
      {field: 'pesoMarmita', header: 'Peso'},
      {field: 'quantidade', header: 'Quantidade'},
    ];
    this.colPedido = [
      {field: 'dataPedido', header: 'Data do Pedido'},
      {field: 'nome', header: 'Cliente'},
      {field: 'quantidade', header: 'Quantidade'},
      {field: 'peso', header: 'Peso'},
      {field: 'total', header: 'Total'},
      {field: 'status', header: 'Status'}
    ];

  }

  relatorioPedidos(): void {
    this.display = true;
    this.relatorioService.listaPedidos(this.dataIni, this.dataFim, this.status).subscribe(res => {
      this.listaPedidos = res;
    });
    this.relatorioService.totalMarmitaPeso(this.dataIni, this.dataFim, this.status).subscribe(res => {
      this.totalMarmitaPeso = res;
    });
    this.relatorioService.totalPedido(this.dataIni, this.dataFim, this.status).subscribe(res => {
      this.totalPedido = res;
    });
  }
}
