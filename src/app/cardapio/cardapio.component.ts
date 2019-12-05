import { Component, OnInit } from '@angular/core';
import {Cardapio} from '../model/cardapio';
import {CardapioService} from '../service/cardapio.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {
  col: any[];
  objeto: Cardapio;
  lista: Cardapio[];
  loading = false;

  constructor(private cardapioService: CardapioService,
              private titleService: Title) {
    this.col = [
      {field: 'id', header: 'Código'},
      {field: 'cardapio', header: 'Cardapio'},
      {field: 'inativo', header: 'Status'},
    ];
  }

  ngOnInit() {
    this.titleService.setTitle('Lista de Cardápios');
  }

  carregaLista(): void {
    this.loading = true;
    this.cardapioService.findAll().subscribe(res => {
      this.lista = res;
      setTimeout(() => this.loading = false);
    });
  }



}
