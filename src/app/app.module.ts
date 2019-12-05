import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {
    ButtonModule,
    CardModule, CheckboxModule, ConfirmationService,
    ConfirmDialogModule, InputTextModule,
    MenuModule,
    MessageModule, MessageService, MultiSelectModule,
    SidebarModule,
    TableModule,
    ToastModule,
    TooltipModule
} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ComidaComponent } from './comida/comida.component';
import { LoginComponent } from './login/login.component';
import { ComidaFormComponent } from './comida/comida-form/comida-form.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import {HttpClientModule} from '@angular/common/http';
import { IngredienteComponent } from './ingrediente/ingrediente.component';
import { IngredienteFormComponent } from './ingrediente/ingrediente-form/ingrediente-form.component';
import {FormsModule} from '@angular/forms';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CardapioFormComponent } from './cardapio/cardapio-form/cardapio-form.component';
import { TamanhoMarmitaComponent } from './tamanho-marmita/tamanho-marmita.component';
import { TamanhoMarmitaFormComponent } from './tamanho-marmita/tamanho-marmita-form/tamanho-marmita-form.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComidaComponent,
    LoginComponent,
    ComidaFormComponent,
    LoginFormComponent,
    IngredienteComponent,
    IngredienteFormComponent,
    CardapioComponent,
    CardapioFormComponent,
    TamanhoMarmitaComponent,
    TamanhoMarmitaFormComponent,
    CadastroComponent
  ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        SidebarModule,
        ButtonModule,
        ToastModule,
        MenuModule,
        TooltipModule,
        CardModule,
        TableModule,
        ConfirmDialogModule,
        HttpClientModule,
        MessageModule,
        FormsModule,
        CheckboxModule,
        MultiSelectModule,
        InputTextModule,
    ],
  providers: [MessageService, ConfirmationService, SidebarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
