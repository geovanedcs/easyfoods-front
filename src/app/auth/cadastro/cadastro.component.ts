import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../model/cliente';
import {ActivatedRoute, Router} from '@angular/router';
import {ClienteService} from '../../service/cliente.service';
import {MessageService} from 'primeng';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  objeto: Cliente;
  confirmarSenha: string;

  constructor(private activatedRoute: ActivatedRoute,
              private clienteService: ClienteService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.has('id')) {
        this.clienteService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.objeto = res;
        });
      } else {
        this.resetaForm();
      }
    });
  }

  salvar(): void {
    if(this.validaCPF(this.objeto.cpf)){
      this.clienteService.save(this.objeto).subscribe(res => {
        this.objeto = res;

        this.messageService.add({
          severity: 'success',
          summary: 'Salvo com sucesso!'
        });

        this.router.navigateByUrl('/login');
      }, erro => {
        this.messageService.add({
          severity: 'error',
          summary: erro.error.message
        });
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'CPF inválido.'
      })
    }

  }

  // função validaCPF retirada do site https://www.geradordecpf.org/funcao-javascript-validar-cpf.html
  validaCPF (cpf) {
    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
      return false;
    for (i = 0; i < cpf.length - 1; i++)
      if (cpf.charAt(i) != cpf.charAt(i + 1))
      {
        digitos_iguais = 0;
        break;
      }
    if (!digitos_iguais)
    {
      numeros = cpf.substring(0,9);
      digitos = cpf.substring(9);
      soma = 0;
      for (i = 10; i > 1; i--)
        soma += numeros.charAt(10 - i) * i;
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(0))
        return false;
      numeros = cpf.substring(0,10);
      soma = 0;
      for (i = 11; i > 1; i--)
        soma += numeros.charAt(11 - i) * i;
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(1))
        return false;
      return true;
    }
    else
      return false;
  }

  private resetaForm(): void {
    this.objeto = new Cliente();
    this.objeto.nome = '';
    this.objeto.cpf = '';
    this.objeto.telefone = '';
    this.objeto.senha = '';
    this.objeto.cep = '';
    this.objeto.logradouro = '';
    this.objeto.bairro = '';
  }
}
