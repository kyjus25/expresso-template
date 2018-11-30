import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';

import {LoginComponent} from './login/login.component';

@NgModule({
  imports: [
    PanelModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
  ],
  exports: [
    LoginComponent
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
  ]
})
export class ExpressoModule {}
