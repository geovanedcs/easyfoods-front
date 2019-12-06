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
import {SigninComponent} from "./home/signin/signin.component";
import {AuthGuard} from "./auth/auth-guard";


const routes: Routes = [
  {
    path: '', component: SigninComponent, canActivate: [AuthGuard]
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
