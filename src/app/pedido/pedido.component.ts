import { Component, OnInit } from '@angular/core';
import {PedidoService} from "../service/pedido.service";
import {Title} from "@angular/platform-browser";
import {Pedido} from "../model/pedido";
import {Cliente} from "../model/cliente";
import {ActivatedRoute, Router} from "@angular/router";
import {MarmitaService} from "../service/marmita.service";
import {UserService} from "../service/user.service";
import {CardapioService} from "../service/cardapio.service";
import {ClienteService} from "../service/cliente.service";
import {MessageService} from "primeng";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {
  lista: Pedido[];
  loading = false;
  objeto: Pedido;

  constructor(private pedidoService: PedidoService,
              private titleService: Title,
              private activatedRoute: ActivatedRoute,
              ) {
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

  cancela( status:number){
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.has('id')) {
        this.pedidoService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.objeto = res;
          this.objeto.status = 0;
          this.pedidoService.save(this.objeto);
          this.carregaLista();
        });
      }
    });
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
