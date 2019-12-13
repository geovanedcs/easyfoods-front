import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CardapioService} from '../service/cardapio.service';
import {Title} from '@angular/platform-browser';
import {Cardapio} from '../model/cardapio';
import {ActivatedRoute, Router} from "@angular/router";
import {Pedido} from "../model/pedido";
import {PedidoService} from "../service/pedido.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  col: any[];
  lista: Cardapio[];
  loading = false;
  deHoje: Cardapio;
  dia: Date;
  objeto: Pedido;
  responsiveOptions;

  constructor(private cardapioService: CardapioService,
              private titleService: Title,
              private router: Router ,
              private pedidoService: PedidoService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.titleService.setTitle('EasyFoods');
    this.carregaLista();
    // @ts-ignore
    this.dia = new Date();
  }

  carregaLista(): void {
    this.loading = true;
    this.cardapioService.findAll().subscribe(res => {
      this.lista = res;
      for (let item of this.lista) {
        if ( item.idDia == this.dia.getDay() ) {
          this.deHoje = item;
        }
      }
      setTimeout(() => this.loading = false);
    });
  }



  agendar(id: number): void {
    this.router.navigate(['/pedido/form'], {queryParams: {idDia: id}});
  }
}
