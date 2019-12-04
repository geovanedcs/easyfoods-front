import { Component, OnInit } from '@angular/core';
import {Comida} from '../../model/comida';
import {ActivatedRoute, Router} from '@angular/router';
import {ComidaService} from '../../service/comida.service';
import {MessageService} from 'primeng';
import {Ingrediente} from '../../model/ingrediente';


@Component({
  selector: 'app-comida-form',
  templateUrl: './comida-form.component.html',
  styleUrls: ['./comida-form.component.scss']
})
export class ComidaFormComponent implements OnInit {
  objeto: Comida;
  ingredientes: Ingrediente[];

  constructor(private activatedRoute: ActivatedRoute,
              private comidaService: ComidaService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.has('id')) {
        this.comidaService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.objeto = res;
        });
      } else {
        this.resetaForm();
      }
    });
  }

  salvar(): void {
    this.comidaService.save(this.objeto).subscribe(res => {
      this.objeto = res;
      this.messageService.add({
        severity: 'success',
        summary: 'Salvo com sucesso!'
      });
      this.router.navigateByUrl('comida');
    }, erro => {
      this.messageService.add({
        severity: 'error',
        summary: erro.error.message
      });
    });
  }

  private resetaForm(): void {
    this.objeto = new Comida();
    this.objeto.comida = '';
  }
}
