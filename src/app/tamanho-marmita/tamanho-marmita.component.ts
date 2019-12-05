import { Component, OnInit } from '@angular/core';
import {TamanhoMarmita} from '../model/tamanho-marmita';
import {MarmitaService} from '../service/marmita.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-tamanho-marmita',
  templateUrl: './tamanho-marmita.component.html',
  styleUrls: ['./tamanho-marmita.component.scss']
})
export class TamanhoMarmitaComponent implements OnInit {
  col: any[];
  lista: TamanhoMarmita[];
  loading = false;

  constructor(private marmitaService: MarmitaService,
              private titleService: Title) {
    this.col = [
      {field: 'id', header: 'Código'},
      {field: 'pesoMarmita', header: 'Tamanho Marmita'},
      {field: 'inativo', header: 'Status'},
    ]
  }

  ngOnInit() {
    this.titleService.setTitle('Lista de Tamanho da Marmita');
  }

  carregaLista(): void {
    this.loading = true;
    this.marmitaService.findAll().subscribe(res => {
      this.lista = res;
      setTimeout(() => this.loading = false);
    });
  }
}
