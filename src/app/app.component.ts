import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';
import {SidebarService} from './service/sidebar.service';
import {UserService} from './service/user.service';
import {AuthService} from './service/auth.service';

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

  constructor(private sidebarService: SidebarService, private authService: AuthService, private userService: UserService) {
    this.isLogado = sidebarService.CheckLogado();
    this.sidebarService.getMostrar$().subscribe(val => this.displaySidebar = val);
  }
  ngOnInit(): void {
    this.sidebarService.setMostrar(false);
    this.renderizaMenu();
    this.isLogado = this.userService.isLogged();
    this.authService.logOn.asObservable().subscribe(res => {
      this.isLogado = res;
    });
  }

  abrirFecharMenu() {
    this.sidebarService.setMostrar(!this.displaySidebar);
    this.renderizaMenu();

  }

  checkRole(): boolean {
    return AuthService.role === 'Vendedor' || AuthService.role === 'Administrador';
  }

  renderizaMenu(): void {
    this.isLogado = this.sidebarService.CheckLogado();
    const rVendedor: boolean = this.checkRole();
    this.menuList = [
      {
        label: 'Home',
        routerLink: '/',
        icon: 'pi pi-home',
        command: () => {this.abrirFecharMenu(); }
      },
      {
        label: 'Comidas',
        routerLink: 'comida',
        icon: 'fas fa-utensils',
        visible: rVendedor,
        command: () => {this.abrirFecharMenu(); }
      },
      {
        label: 'Ingredientes',
        routerLink: 'ingrediente',
        icon: 'fas fa-utensils',
        visible: rVendedor,
        command: () => {this.abrirFecharMenu(); }
      },
      {
        label: 'Cardápios',
        routerLink: 'cardapio',
        icon: 'pi pi-list',
        visible: rVendedor,
        command: () => {this.abrirFecharMenu(); }
      },
      {
        label: 'Pedidos',
        routerLink: 'pedido',
        icon: 'pi pi-id-card',
        visible: this.userService.isLogged(),
        command: () => {this.abrirFecharMenu(); }
      },
      {
        label: 'Relatorios',
        icon: 'fas fa-chart-line',
        items: [{
          label: 'Pedidos',
          routerLink: 'relatorio',
          icon: 'pi pi-fw pi-plus',
        },
          {label: 'Teste', icon: 'pi pi-fw pi-external-link'},
          {separator: true},
          {label: 'Quit', icon: 'pi pi-fw pi-times'}
        ],
        visible: rVendedor,
        command: () => {this.abrirFecharMenu(); }
      }
    ];
  }
}
