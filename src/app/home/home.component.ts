import { Component, OnInit } from '@angular/core';
import {CardapioService} from '../service/cardapio.service';
import {Title} from '@angular/platform-browser';
import {Cardapio} from '../model/cardapio';
import {ComidaCardapio} from '../model/comidaCardapio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  col: any[];
  lista: Cardapio[];
  loading = false;

  constructor(private cardapioService: CardapioService,
              private titleService: Title) {
    this.col = [
      {field: 1, header: 'Segunda-Feira'},
      {field: 2, header: 'Terça-Feira'},
      {field: 3, header: 'Quarta-Feira'},
      {field: 4, header: 'Quinta-Feira'},
      {field: 5, header: 'Sexta-Feira'}
    ];
  }

  ngOnInit() {
    this.titleService.setTitle('EasyFoods');
  }

  carregaLista(): void {
    this.loading = true;
    this.cardapioService.findAll().subscribe(res => {
      this.lista = res;
      setTimeout(() => this.loading = false);
    });
  }

}
