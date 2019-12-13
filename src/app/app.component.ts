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

  constructor(private sidebarService: SidebarService, private authService: AuthService, private userUser: UserService) {
    this.isLogado = sidebarService.CheckLogado();
    this.sidebarService.getMostrar$().subscribe(val => this.displaySidebar = val);
  }
  ngOnInit(): void {
    this.sidebarService.setMostrar(false);
    this.renderizaMenu();
    this.isLogado = this.userUser.isLogged();
    this.authService.logOn.asObservable().subscribe(res => {
      this.isLogado = res;
    });
  }

  abrirFecharMenu() {
    this.renderizaMenu();
    this.sidebarService.setMostrar(!this.displaySidebar);
  }

  checkRole(): boolean {
    return AuthService.role === 'Vendedor' || AuthService.role === 'Administrador';
  }

  renderizaMenu(): void {
    this.isLogado = this.sidebarService.CheckLogado();
    const nCliente: boolean = this.checkRole();
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
        visible: nCliente
      },
      {
        label: 'Ingredientes',
        routerLink: 'ingrediente',
        icon: 'fas fa-utensils',
        visible: nCliente
      },
      {
        label: 'Cardápios',
        routerLink: 'cardapio',
        icon: 'pi pi-list',
        visible: nCliente
      },
      {
        label: 'Pedidos',
        routerLink: 'pedido',
        icon: 'pi pi-id-card',
      },
      {
        label: 'Relatorios',
        routerLink: 'relatorio',
        icon: 'fas fa-chart-line',
        visible: nCliente
      }
    ];
  }
}
