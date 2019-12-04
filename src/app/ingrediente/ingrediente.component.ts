import { Component, OnInit } from '@angular/core';
import {Ingrediente} from '../model/ingrediente';
import {IngredienteService} from '../service/ingrediente.service';
import {ConfirmationService, MessageService} from 'primeng';
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
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
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

  excluir(id: number): void {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja excluir esse ingrediente?',
      accept: () => this.deletar(id),
      acceptLabel: 'SIM',
      rejectLabel: 'NÃO'
    });
  }
  private deletar(id: number): void {
    this.loading = true;
    this.ingredienteService.delete(id).subscribe(() => {
      this.carregaLista();
      this.messageService.add({
        severity: 'success',
        summary: 'Excluído com sucesso!'
      });
      setTimeout(() => this.loading = false);
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: error.error.message
      });
      setTimeout(() => this.loading = false);
    });
  }
}
