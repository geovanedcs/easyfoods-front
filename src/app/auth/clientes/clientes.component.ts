import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../model/cliente';
import {ClienteService} from '../../service/cliente.service';
import {ConfirmationService, MessageService} from 'primeng';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  col: any[];
  lista: Cliente[];
  loading = false;

  constructor(private clienteService: ClienteService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private titleService: Title) {
    this.col = [
      {field: 'id', header: 'Código'},
      {field: 'nome', header: 'Nome'},
      {field: 'cpf', header: 'CPF'},
      {field: 'telefone', header: 'Telefone'},
      {field: 'cep', header: 'CEP'},
      {field: 'logradouro', header: 'Logradouro'},
      {field: 'numero', header: 'Número'},
      {field: 'bairro', header: 'Bairro'}
    ];
  }

  ngOnInit() {
    this.titleService.setTitle('Lista de Clientes');
  }

  excluir(id: number): void {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja excluir esse cliente?',
      accept: () => this.deletar(id),
      acceptLabel: 'SIM',
      rejectLabel: 'NÃO',
    });
  }

  carregarLista(): void {
    this.loading = true;
    this.clienteService.findAll().subscribe(res => {
      this.lista = res;
      setTimeout(() => this.loading = false);
    });
  }

  private deletar(id: number): void {
    this.loading = true;
    this.clienteService.delete(id).subscribe(() => {
      this.carregarLista();

      this.messageService.add({
        severity: 'success',
        summary: 'Deletado com sucesso!'
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
