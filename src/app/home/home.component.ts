import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CardapioService} from '../service/cardapio.service';
import {Title} from '@angular/platform-browser';
import {Cardapio} from '../model/cardapio';

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
  // @ts-ignore
  dia = new Date();
  responsiveOptions;

  constructor(private cardapioService: CardapioService,
              private titleService: Title) {
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

  agendar(idDia: number): void {
    this.router
  }
}
