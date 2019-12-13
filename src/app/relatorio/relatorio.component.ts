import { Component, OnInit } from '@angular/core';
import {RelatorioService} from "../service/relatorio.service";
import {Title} from "@angular/platform-browser";
import {MenuItem} from "primeng";

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {
  items: MenuItem[];
  pedidos = true;

  constructor(private relatorioService: RelatorioService,
              private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Relatórios');
  }

}
