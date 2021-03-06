import { Component, OnInit } from '@angular/core';
import {ListaPedidos} from '../../model/relatorio/listaPedidos';
import {TotalMarmitaPeso} from '../../model/relatorio/totalMarmitaPeso';
import {TotalPedido} from '../../model/relatorio/totalPedido';
import {RelatorioService} from '../../service/relatorio.service';
import {Title} from '@angular/platform-browser';
import {PedidoService} from "../../service/pedido.service";
import {Pedido} from "../../model/pedido";
import {Observable} from "rxjs";
import {MessageService} from "primeng";
import {now} from "moment";

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.scss']
})
export class ListaPedidosComponent implements OnInit {

  pedidoItem: Pedido;
  listaPedidos: ListaPedidos[];
  totalMarmitaPeso: TotalMarmitaPeso[];
  totalPedido: TotalPedido;
  listaStatus: any[];
  colPeso: any[];
  colPedido: any[];


  // Filtros
  dataIni: Date;
  dataFim: Date;
  status: string;
  display = false;


  constructor(private relatorioService: RelatorioService,
              private pedidoService: PedidoService,
              private messageService: MessageService,
              private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Lista de Pedidos');
    this.listaStatus = [
      {value: 'CANCELADO', label: 'Cancelado'},
      {value: 'SOLICITADO', label: 'Solicitado'},
      {value: 'PENDENTE', label: 'Entregue'},
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
    // @ts-ignore
    this.relatorioService.listaPedidos(this.dataIni, this.dataFim, this.status).subscribe(res => {
      this.listaPedidos = res;
    });
    // @ts-ignore
    this.relatorioService.totalMarmitaPeso(this.dataIni, this.dataFim, this.status).subscribe(res => {
      this.totalMarmitaPeso = res;
    });
    // @ts-ignore
    this.relatorioService.totalPedido(this.dataIni, this.dataFim, this.status).subscribe(res => {
      this.totalPedido = res;
    });
  }

  entregar(idPedido: number):void {
    this.pedidoService.findOne(idPedido).subscribe(res => {
      this.pedidoItem = res;
      this.pedidoItem.status = 2;
      console.log(this.pedidoItem);
      this.pedidoService.save(this.pedidoItem).subscribe(res => this.pedidoItem = res);
      setTimeout(() => 300);
      this.display = false;
      this.relatorioPedidos();
      this.messageService.add({
        severity: 'success',
        summary: 'Pedido Entregue, aguardando pagamento!!',
      });
    });

  }

  receber(idPedido: number):void {
    this.pedidoService.findOne(idPedido).subscribe(res => {
      this.pedidoItem = res;
      this.pedidoItem.status = 3;
      this.pedidoService.save(this.pedidoItem).subscribe(res => this.pedidoItem = res);
      this.display = false;
      this.relatorioPedidos();
      setTimeout(() => 300);
      this.messageService.add({
        severity: 'success',
        summary: 'Pedido Pago!',
      });
    });
  }

  mudaStatus(status: number) :string {
    if(status == 0){
      return  "Cancelado";
    }else if(status == 1){
      return  "Solicitado";
    }else if(status == 2){
      return  "Entregue";
    }else if(status == 3){
      return  "Pago";
    }
    return null;
  }

  fechar() {
    this.display = false;
  }
}
