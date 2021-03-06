import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComidaComponent} from './comida/comida.component';
import {ComidaFormComponent} from './comida/comida-form/comida-form.component';
import {IngredienteComponent} from './ingrediente/ingrediente.component';
import {IngredienteFormComponent} from './ingrediente/ingrediente-form/ingrediente-form.component';
import {CardapioComponent} from './cardapio/cardapio.component';
import {CardapioFormComponent} from './cardapio/cardapio-form/cardapio-form.component';
import {TamanhoMarmitaComponent} from './tamanho-marmita/tamanho-marmita.component';
import {TamanhoMarmitaFormComponent} from './tamanho-marmita/tamanho-marmita-form/tamanho-marmita-form.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuard} from './auth/auth-guard';
import {HomeComponent} from './home/home.component';
import {CadastroComponent} from './auth/cadastro/cadastro.component';
import {SignoutComponent} from './auth/signout/signout.component';
import {PedidoComponent} from './pedido/pedido.component';
import {PedidoFormComponent} from './pedido/pedido-form/pedido-form.component';
import {ClientesComponent} from './auth/clientes/clientes.component';
import {RelatorioComponent} from "./relatorio/relatorio.component";
import {ListaPedidosComponent} from "./relatorio/lista-pedidos/lista-pedidos.component";
import {VendedorGuard} from "./auth/vendedor-guard";


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: SigninComponent
  },
  {
    path: 'comida', component: ComidaComponent, canActivate: [VendedorGuard]
  },
  {
    path: 'comida/form', component: ComidaFormComponent, canActivate: [VendedorGuard]
  },
  {
    path: 'ingrediente', component: IngredienteComponent, canActivate: [VendedorGuard]
  },
  {
    path: 'ingrediente/form', component: IngredienteFormComponent, canActivate: [VendedorGuard]
  },
  {
    path: 'pedido', component: PedidoComponent, canActivate: [AuthGuard]
  },
  {
    path: 'pedido/form', component: PedidoFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'tamanho-marmita', component: TamanhoMarmitaComponent, canActivate: [VendedorGuard]
  },
  {
    path: 'tamanho-marmita/form', component: TamanhoMarmitaFormComponent, canActivate: [VendedorGuard]
  },
  {
    path: 'cardapio', component: CardapioComponent, canActivate: [AuthGuard]
  },
  {
    path: 'cardapio/form', component: CardapioFormComponent, canActivate: [VendedorGuard]
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'logout', component: SignoutComponent
  },
  {
    path: 'clientes', component: ClientesComponent, canActivate: [VendedorGuard]
  },
  {
    path: 'relatorio', component: RelatorioComponent, canActivate: [VendedorGuard]
  },
  {
    path: 'relatorio/listaPedidos', component: ListaPedidosComponent, canActivate: [VendedorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, VendedorGuard]
})
export class AppRoutingModule { }
