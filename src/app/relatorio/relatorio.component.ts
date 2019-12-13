import { Component, OnInit } from '@angular/core';
import {RelatorioService} from "../service/relatorio.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {
  items: any[];
  pedidos = true;

  constructor(private relatorioService: RelatorioService,
              private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Relatórios');
    this.items = [
      {
        label: "Relatório Pedidos",
        command: this.pedidos = true,
      },
      {
        label: "Teste",
        command: this.pedidos = false,
      }
    ];
  }

}
