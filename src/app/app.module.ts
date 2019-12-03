import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {
  ButtonModule,
  CardModule, ConfirmationService,
  ConfirmDialogModule,
  MenuModule,
  MessageModule, MessageService,
  SidebarModule,
  TableModule,
  ToastModule,
  TooltipModule
} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ComidaComponent } from './comida/comida.component';
import { LoginComponent } from './login/login.component';
import { ComidaFormComponent } from './comida-form/comida-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComidaComponent,
    LoginComponent,
    ComidaFormComponent,
    LoginFormComponent
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
  ],
  providers: [MessageService, ConfirmationService, SidebarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
