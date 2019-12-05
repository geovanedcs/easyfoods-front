import { Component, OnInit } from '@angular/core';
import {Ingrediente} from '../model/ingrediente';
import {IngredienteService} from '../service/ingrediente.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ingrediente',
  templateUrl: './ingrediente.component.html',
  styleUrls: ['./ingrediente.component.scss']
})
export class IngredienteComponent implements OnInit {
  col: any[];
  lista: Ingrediente[];
  loading = false;

  constructor(private ingredienteService: IngredienteService,
              private titleService: Title) {
    this.col = [
      {field: 'id', header: 'Código'},
      {field: 'ingrediente', header: 'Ingrediente'},
      {field: 'inativo', header: 'Status'},
    ];
  }

  ngOnInit() {
    this.titleService.setTitle('Lista de Ingredientes');
  }

  carregaLista(): void {
    this.loading = true;
    this.ingredienteService.findAll().subscribe(res => {
      this.lista = res;
      setTimeout(() => this.loading = false);
    });
  }
}

