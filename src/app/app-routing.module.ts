import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ComidaComponent} from './comida/comida.component';
import {LoginComponent} from './login/login.component';
import {ComidaFormComponent} from './comida-form/comida-form.component';
import {LoginFormComponent} from './login-form/login-form.component';


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
