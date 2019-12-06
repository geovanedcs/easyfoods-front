import { Component, OnInit } from '@angular/core';
import {TamanhoMarmita} from '../../model/tamanho-marmita';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from 'primeng';
import {MarmitaService} from '../../service/marmita.service';


@Component({
  selector: 'app-tamanho-marmita-form',
  templateUrl: './tamanho-marmita-form.component.html',
  styleUrls: ['./tamanho-marmita-form.component.scss']
})
export class TamanhoMarmitaFormComponent implements OnInit {
  objeto: TamanhoMarmita;
  checked: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private marmitaService: MarmitaService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.has('id')) {
        this.marmitaService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.objeto = res;
          this.checked = this.objeto.inativo;
        });
      } else {
        this.resetaForm();
      }
    });
  }

  salvar(): void {
    this.objeto.inativo = this.checked;
    this.marmitaService.save(this.objeto).subscribe(res => {
      this.objeto = res;
      this.messageService.add({
        severity: 'success',
        summary: 'Salvo com sucesso!'
      });
      this.router.navigateByUrl('tamanho-marmita');
    }, erro => {
      this.messageService.add({
        severity: 'error',
        summary: erro.error.message
      });
    });
  }

  private resetaForm(): void {
    this.objeto = new TamanhoMarmita();
  }

}
