import { Component, OnInit } from '@angular/core';
import {Comida} from '../../model/comida';
import {ActivatedRoute, Router} from '@angular/router';
import {ComidaService} from '../../service/comida.service';
import {MessageService} from 'primeng';
import {Ingrediente} from '../../model/ingrediente';
import {IngredienteService} from "../../service/ingrediente.service";
import {ComidaIngrediente} from "../../model/comidaIngrediente";


@Component({
  selector: 'app-comida-form',
  templateUrl: './comida-form.component.html',
  styleUrls: ['./comida-form.component.scss']
})
export class ComidaFormComponent implements OnInit {
  objeto: Comida;
  ingredientes: Ingrediente[];
  selectedIngredientes: Ingrediente[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private comidaService: ComidaService,
              private ingredienteService: IngredienteService,
              private router: Router,
              private messageService: MessageService) {
    ingredienteService.findAll().subscribe( ingrediente => {
      this.ingredientes = ingrediente;
    });
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.has('id')) {
        this.comidaService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.objeto = res;
          this.selectedIngredientes = [];
          for (const comidaIngrediente of this.objeto.ingredienteList) {
            this.selectedIngredientes.push(comidaIngrediente.ingrediente);
          }
        });
      } else {
        this.resetaForm();
      }
    });
  }

  salvar(): void {
    this.objeto.ingredienteList = [];
    for (const ingrediente of this.selectedIngredientes) {
      const comidaIngrediente = new ComidaIngrediente();
      comidaIngrediente.ingrediente = ingrediente;
      this.objeto.ingredienteList.push(comidaIngrediente);
    }

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
