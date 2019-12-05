import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ComidaComponent} from './comida/comida.component';
import {LoginComponent} from './login/login.component';
import {ComidaFormComponent} from './comida/comida-form/comida-form.component';
import {LoginFormComponent} from './login/login-form/login-form.component';
import {IngredienteComponent} from './ingrediente/ingrediente.component';
import {IngredienteFormComponent} from './ingrediente/ingrediente-form/ingrediente-form.component';
import {CardapioComponent} from "./cardapio/cardapio.component";
import {CardapioFormComponent} from "./cardapio/cardapio-form/cardapio-form.component";




const routes: Routes = [
  {
    path: '', component: HomeComponent
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
  // {
  //   path: 'marmita/form', component: MarmitaFormComponent
  // },
  {
    path: 'cardapio', component: CardapioComponent
  },
  {
    path: 'cardapio/form', component: CardapioFormComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'login/form', component: LoginFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
