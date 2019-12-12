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
  lista: Pedido[];
  loading = false;

  constructor(private pedidoService: PedidoService,
              private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Lista de Pedidos');
  }
  mudaStatus(status: number) :string {
    if(status == 0){
      return  "Cancelado";
    }else if(status == 1){
      return  "Solicitado";
    }else if(status == 2){
      return  "Pendente";
    }else if(status == 3){
      return  "Ok";
    }
    return null;
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
