import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../model/pedido';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from 'primeng';
import {PedidoService} from '../../service/pedido.service';
import {TamanhoMarmita} from '../../model/tamanho-marmita';
import {MarmitaService} from '../../service/marmita.service';
import * as moment from 'moment';
import {Cliente} from '../../model/cliente';
import {UserService} from '../../service/user.service';
import {ClienteService} from '../../service/cliente.service';
import {CardapioService} from '../../service/cardapio.service';
import {Cardapio} from '../../model/cardapio';
import {map} from 'rxjs/operators';
import {throwError} from "rxjs";


@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent implements OnInit {

  objeto: Pedido;
  tamanhoMarmitaList: TamanhoMarmita[];
  hoje: Date;
  cliente: Cliente;
  cardapio: Cardapio;

  constructor(private activatedRoute: ActivatedRoute,
              private pedidoService: PedidoService,
              private tamanhoMarmitaService: MarmitaService,
              private router: Router,
              private userService: UserService,
              private cardapioService: CardapioService,
              private clienteService: ClienteService,
              private messageService: MessageService) {
      tamanhoMarmitaService.findAll().subscribe(tamanhoMarmita => {
        this.tamanhoMarmitaList = tamanhoMarmita;
      });
  }

  ngOnInit(): void {
    // @ts-ignore
    this.hoje = new Date();
    this.agendar(this.hoje.getDay());
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.has('id')) {
        this.pedidoService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.objeto = res;
        });
      } else if (params.has('idDia')) {
        this.agendar(parseInt(params.get('idDia')));
      }
    });
    this.userService.getUser().subscribe(res => {
      this.cliente = res;
      console.log(res);
    });
  }



  salvar(): void {
    console.log(this.objeto);
    if(this.objeto.quantidade>0) {
      this.objeto.cliente = this.cliente;
      this.pedidoService.save(this.objeto).subscribe(res => {
        this.objeto = res;
        this.messageService.add({
          severity: 'success',
          summary: 'Salvo com sucesso!',
        });
      }),
        erro => {
          this.messageService.add({
            severity: 'error',
            summary: erro.error.message,
          })
        };
      this.router.navigateByUrl('pedido');
    }else{
      this.messageService.add({
        severity: 'error',
        summary: 'Não pode estar vazio.',
      });
    }
  }

  pedirDoDia(): void {
    this.objeto = new Pedido();
    this.objeto.dataPedido = this.hoje;
    this.pegarVendedor(2);
    this.cardapioService.findAll().subscribe(res => {
      // @ts-ignore
      this.objeto.cardapio = res.find(value => value.idDia === this.hoje.getDay());
    });
  }

  agendar(idCardapio:number): void {
    let dia = moment();
    this.objeto = new Pedido();
    if (idCardapio) {
      dia = moment().add(idCardapio, 'd').subtract(this.hoje.getDay(), 'd');
    }

    this.objeto.dataPedido = dia.toDate();
    this.pegarVendedor(2);
    this.cardapioService.findAll().subscribe(res => {
      this.objeto.cardapio = res.find(value => value.idDia === dia.day());
    });
    this.objeto.status = 1;
  }

  pegarVendedor(id: number): void {
    this.clienteService.findOne(id).subscribe(res =>
    this.objeto.vendedor = res
    );
  }
}

