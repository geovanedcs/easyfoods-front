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
  dia = new Date();

  constructor(private cardapioService: CardapioService,
              private titleService: Title) {

  }

  ngOnInit() {
    this.titleService.setTitle('EasyFoods');
    this.dia.getDay();
    this.carregaLista();

  }

  carregaLista(): void {
    this.loading = true;
    this.cardapioService.findAll().subscribe(res => {
      this.lista = res;
      for (let item of this.lista) {
        if ( item.idDia == this.dia.valueOf() ) {
          this.deHoje = item;
        }
      }
      setTimeout(() => this.loading = false);
    });
  }

}
