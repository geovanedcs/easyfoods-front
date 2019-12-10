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
import {PedidoComponent} from "./pedido/pedido.component";
import {PedidoFormComponent} from "./pedido/pedido-form/pedido-form.component";
import {ClientesComponent} from './auth/clientes/clientes.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: SigninComponent
  },
  {
    path: 'comida', component: ComidaComponent, canActivate: [AuthGuard]
  },
  {
    path: 'comida/form', component: ComidaFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'ingrediente', component: IngredienteComponent, canActivate: [AuthGuard]
  },
  {
    path: 'ingrediente/form', component: IngredienteFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'pedido', component: PedidoComponent, canActivate: [AuthGuard]
  },
  {
    path: 'pedido/form', component: PedidoFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'tamanho-marmita', component: TamanhoMarmitaComponent, canActivate: [AuthGuard]
  },
  {
    path: 'tamanho-marmita/form', component: TamanhoMarmitaFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'cardapio', component: CardapioComponent, canActivate: [AuthGuard]
  },
  {
    path: 'cardapio/form', component: CardapioFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'logout', component: SignoutComponent, canActivate: [AuthGuard]
  },
  {
    path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
