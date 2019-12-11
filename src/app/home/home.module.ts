import {NgModule} from '@angular/core';

import {HomeComponent} from './home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {VMessageModule} from '../vmessage/vmessage.module';
import {SigninComponent} from '../auth/signin/signin.component';
import {RouterModule} from '@angular/router';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [SigninComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        NgxMaskModule
    ],
  providers: [],
  bootstrap: [HomeComponent]
})

export class HomeModule {}
