import { Component, OnInit } from '@angular/core';
import {ComidaService} from '../service/comida.service';
import {ConfirmationService, MessageService} from 'primeng';
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
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
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

  excluir(id: number): void {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja excluir essa comida?',
      accept: () => this.deletar(id),
      acceptLabel: 'SIM',
      rejectLabel: 'NÃO'
    });
  }
  private deletar(id: number): void {
    this.loading = true;
    this.comidaService.delete(id).subscribe(() => {
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
