import {Component, OnInit} from '@angular/core';
import {MenuItem, SidebarModule} from 'primeng';
import {SidebarService} from './service/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'easyfood';
  displaySidebar: boolean;
  menuList: MenuItem[];

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.getMostrar$().subscribe(val => this.displaySidebar = val);
    this.menuList = [
      {
        label: 'Home',
        routerLink: '/',
        icon: 'pi pi-home'
      },
      {
        label: 'Comidas',
        routerLink: 'comida',
        icon: 'fas fa-utensils'
      },
      {
        label: 'Ingredientes',
        routerLink: 'ingrediente',
        icon: 'fas fa-utensils'
      },
      {
        label: 'Cardápios',
        routerLink: 'cardapio',
        icon: 'pi pi-list'
      },
      {
        label: 'Sair',
        routerLink: 'logout'
      }
    ];
  }
  ngOnInit(): void {
    this.sidebarService.setMostrar(false);
  }

  abrirFecharMenu() {
    this.sidebarService.setMostrar(!this.displaySidebar);
  }


}
