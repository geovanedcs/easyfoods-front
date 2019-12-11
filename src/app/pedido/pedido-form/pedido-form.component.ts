import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../model/pedido';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from 'primeng';
import {PedidoService} from '../../service/pedido.service';
import {TamanhoMarmita} from '../../model/tamanho-marmita';
import {MarmitaService} from '../../service/marmita.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent implements OnInit {

  objeto: Pedido;
  tamanhoMarmitaList: TamanhoMarmita[];
  dia = new Date();

  constructor(private activatedRoute: ActivatedRoute,
              private pedidoService: PedidoService,
              private tamanhoMarmitaService: MarmitaService,
              private router: Router,
              private messageService: MessageService) {
    tamanhoMarmitaService.findAll().subscribe(tamanhoMarmita => {
      this.tamanhoMarmitaList = tamanhoMarmita;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.has('id')) {
        this.pedidoService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.objeto = res;
        });
      } else {
        this.pedirDoDia();
      }
    });
  }

  salvar(): void {
    console.log(this.objeto);
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
        summary: erro.error.message
      });
    });
  }

  pedirDoDia(): void {
    this.objeto = new Pedido();
    this.objeto.cardapio.idDia = this.dia.getDay();
  }

}
