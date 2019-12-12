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
              private messageService: MessageService,
              private router: Router
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

  cancela(id: number): void {

      this.pedidoService.findOne(id).subscribe(res => {
        this.objeto = res;
        console.log(this.objeto.status);
        this.objeto.status = 0;
        console.log(this.objeto);
        this.pedidoService.save(this.objeto).subscribe(res => {
          this.objeto = res;
          console.log(this.objeto);
          this.messageService.add({
            severity: 'success',
            summary: 'Salvo com sucesso!',
          });
          this.carregaLista();
          this.router.navigateByUrl('pedido');
        }, erro => {
          this.messageService.add({
            severity: 'error',
            summary: erro.error.message,
          });
        });
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
