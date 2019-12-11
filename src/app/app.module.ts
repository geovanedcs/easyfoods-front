import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {
  CardModule, CarouselModule, CheckboxModule, ConfirmationService,
  ConfirmDialogModule,
  ButtonModule, CalendarModule,
  DropdownModule,
  MenuModule,
  MessageModule, MessageService, MultiSelectModule,
  SidebarModule,
  TableModule,
  ToastModule,
  TooltipModule, InputTextModule
} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ComidaComponent } from './comida/comida.component';
import { ComidaFormComponent } from './comida/comida-form/comida-form.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { IngredienteComponent } from './ingrediente/ingrediente.component';
import { IngredienteFormComponent } from './ingrediente/ingrediente-form/ingrediente-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CardapioFormComponent } from './cardapio/cardapio-form/cardapio-form.component';
import { TamanhoMarmitaComponent } from './tamanho-marmita/tamanho-marmita.component';
import { TamanhoMarmitaFormComponent } from './tamanho-marmita/tamanho-marmita-form/tamanho-marmita-form.component';
import {HomeModule} from './home/home.module';
import {TokenInterceptor} from './auth/token.interceptor';
import {CadastroComponent} from "./auth/cadastro/cadastro.component";
import { SignoutComponent } from './auth/signout/signout.component';
import {PedidoComponent} from "./pedido/pedido.component";
import {PedidoFormComponent} from "./pedido/pedido-form/pedido-form.component";
import {NgxMaskModule} from 'ngx-mask';
import { ClientesComponent } from './auth/clientes/clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComidaComponent,
    ComidaFormComponent,
    IngredienteComponent,
    IngredienteFormComponent,
    CardapioComponent,
    CardapioFormComponent,
    TamanhoMarmitaComponent,
    TamanhoMarmitaFormComponent,
    CadastroComponent,
    SignoutComponent,
    PedidoComponent,
    PedidoFormComponent,
    ClientesComponent,
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
    HomeModule,
    ReactiveFormsModule,
    CarouselModule,
    CalendarModule,
    DropdownModule,
    NgxMaskModule.forRoot(),
    InputTextModule,
  ],
  providers: [MessageService, ConfirmationService, SidebarModule, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
