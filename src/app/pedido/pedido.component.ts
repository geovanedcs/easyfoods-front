import { Component, OnInit } from '@angular/core';
import {PedidoService} from "../service/pedido.service";
import {Title} from "@angular/platform-browser";
import {Pedido} from "../model/pedido";
import {Cliente} from "../model/cliente";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {
  col: any[];
  lista: Pedido[];
  loading = false;

  constructor(private pedidoService: PedidoService,
              private titleService: Title) {
    this.col = [
      {field: 'cliente', header: 'Cliente'},
      {field: 'vendedor', header: 'Vendedor'},
      {field: 'dataPedido', header: 'Data do Pedido'},
      {field: 'tamanhoMarmita', header: 'Tamanho da Marmita'},
      {field: 'quantidade', header: 'Quantidade'},
    ];
  }

  ngOnInit() {
    this.titleService.setTitle('Lista de Pedidos');
  }

  carregaLista(): void {
    this.loading = true;
    this.pedidoService.findAll().subscribe(res => {
      this.lista = res;
      setTimeout(() => this.loading = false);
      console.log(this.lista);
    });
  }

}
