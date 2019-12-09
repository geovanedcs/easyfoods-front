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


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: SigninComponent
  },
  {
    path: 'comida', component: ComidaComponent
  },
  {
    path: 'comida/form', component: ComidaFormComponent
  },
  {
    path: 'ingrediente', component: IngredienteComponent
  },
  {
    path: 'ingrediente/form', component: IngredienteFormComponent
  },
  {
    path: 'tamanho-marmita', component: TamanhoMarmitaComponent
  },
  {
    path: 'tamanho-marmita/form', component: TamanhoMarmitaFormComponent
  },
  {
    path: 'cardapio', component: CardapioComponent
  },
  {
    path: 'cardapio/form', component: CardapioFormComponent
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'logout', component: SignoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
