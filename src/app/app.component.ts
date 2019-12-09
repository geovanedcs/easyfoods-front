import {Component, OnInit} from '@angular/core';
import {MenuItem, SidebarModule} from 'primeng';
import {SidebarService} from './service/sidebar.service';
import {UserService} from "./service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'easyfood';
  displaySidebar: boolean;
  isLogado: boolean;
  menuList: MenuItem[];

  constructor(private sidebarService: SidebarService) {
    this.isLogado = sidebarService.CheckLogado();
    this.sidebarService.getMostrar$().subscribe(val => this.displaySidebar = val);
    this.renderizaMenu();
  }
  ngOnInit(): void {
    this.sidebarService.setMostrar(false);
    routerLink: 'logout',
      visible: this.isLogado,
      command: () => {
      this.abrirFecharMenu();
    }
  }
];
  }

  abrirFecharMenu() {
    this.renderizaMenu();
    this.sidebarService.setMostrar(!this.displaySidebar);
  }

  renderizaMenu(): void {
    this.isLogado = this.sidebarService.CheckLogado();
    this.menuList = [
      {
        label: 'Home',
        routerLink: '/',
        icon: 'pi pi-home',
      },
      {
        label: 'Comidas',
        routerLink: 'comida',
        icon: 'fas fa-utensils',
      },
      {
        label: 'Ingredientes',
        routerLink: 'ingrediente',
        icon: 'fas fa-utensils',
      },
      {
        label: 'Cardápios',
        routerLink: 'cardapio',
        icon: 'pi pi-list',
      },
      {
        label: 'Login',
        routerLink: 'login',
        visible: !this.isLogado,
        command: () => {
          this.abrirFecharMenu();
        }
      },
      {
        label: 'Sair',
        routerLink: '',
        icon: 'fas fa-sign-out-alt',
      }
    ];
  }

}
