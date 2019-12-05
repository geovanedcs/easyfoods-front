import { Component, OnInit } from '@angular/core';
import {Cardapio} from "../../model/cardapio";
import {ActivatedRoute, Router} from "@angular/router";
import {CardapioService} from "../../service/cardapio.service";
import {MessageService} from "primeng";
import {Comida} from "../../model/comida";
import {ComidaService} from "../../service/comida.service";
import {ComidaCardapio} from "../../model/comidaCardapio";

@Component({
  selector: 'app-cardapio-form',
  templateUrl: './cardapio-form.component.html',
  styleUrls: ['./cardapio-form.component.scss']
})
export class CardapioFormComponent implements OnInit {
  objeto: Cardapio;
  comidas: Comida[];
  selectedComidas: Comida[];
  checked = false;

  constructor(private activatedRoute: ActivatedRoute,
              private cardapioService: CardapioService,
              private comidaService: ComidaService,
              private router: Router,
              private messageService: MessageService) {
    comidaService.findAll().subscribe(comida => {
      this.comidas = comida;
    })
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if(params.has('id')) {
        this.cardapioService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.objeto = res;
          this.selectedComidas = [];
          for (const comidaCardapio of this.objeto.comidaCardapioList) {
            this.selectedComidas.push(comidaCardapio.comida);
          };
        });
      } else {
        this.resetaForm();
      }
    });
  }

  salvar(): void {
    this.objeto.comidaCardapioList = [];
    for (const comida of this.selectedComidas) {
      const comidaCardapio = new ComidaCardapio();
      comidaCardapio.comida = comida;
      this.objeto.comidaCardapioList.push(comidaCardapio);
    }

    this.cardapioService.save(this.objeto).subscribe(res => {
      this.objeto = res;
      this.messageService.add({
        severity: 'success',
        summary: 'Salvo com sucesso!'
      });
      this.router.navigateByUrl('cardapio');
    }, erro => {
      this.messageService.add({
        severity: 'error',
        summary: erro.error.message
      });
    });
  }

  private resetaForm(): void {
    this.objeto = new Cardapio()
    this.objeto.cardapio = '';
  }

}
