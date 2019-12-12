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
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.has('id')) {
        this.pedidoService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.objeto = res;
        });
      } else {
        this.agendar();
      }
    });
    this.userService.getUser().subscribe(res => {
      this.cliente = res;
      console.log(res);
    });
  }



  salvar(): void {
    console.log(this.objeto);
    this.objeto.cliente = this.cliente;
    this.pedidoService.save(this.objeto).subscribe(res => {
      this.objeto = res;
      console.log(this.objeto);
      this.messageService.add({
        severity: 'success',
        summary: 'Salvo com sucesso!',
      });
      this.router.navigateByUrl('pedido');
    }, erro => {
      this.messageService.add({
        severity: 'error',
        summary: erro.error.message,
      });
    });
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

  agendar(): void {
    const idCardapio  = history.state.idDia;
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

