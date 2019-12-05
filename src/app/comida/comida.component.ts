import { Component, OnInit } from '@angular/core';
import {ComidaService} from '../service/comida.service';
import {Title} from '@angular/platform-browser';
import {Comida} from '../model/comida';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss']
})
export class ComidaComponent implements OnInit {
  col: any[];
  lista: Comida[];
  loading = false;

  constructor(private comidaService: ComidaService,
              private titleService: Title) {
    this.col = [
      {field: 'id', header: 'Código'},
      {field: 'comida', header: 'Comida'},
      {field: 'inativo', header: 'Status'},
    ];
  }

  ngOnInit() {
    this.titleService.setTitle('Lista de Comidas');
  }

  carregaLista(): void {
    this.loading = true;
    this.comidaService.findAll().subscribe(res => {
      this.lista = res;
      setTimeout(() => this.loading = false);
    });
  }
}
