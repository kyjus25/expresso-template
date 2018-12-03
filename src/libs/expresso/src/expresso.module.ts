import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';

import {LoginComponent} from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminComponent} from './admin/admin.component';
import {TopbarComponent} from './admin/topbar/topbar.component';
import {MainComponent} from './admin/main/main.component';
import {SidebarComponent} from './admin/sidebar/sidebar.component';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    PanelModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    MenubarModule
  ],
  exports: [
    LoginComponent,
    AdminComponent,

    TopbarComponent,
    MainComponent,
    SidebarComponent
  ],
  declarations: [
    LoginComponent,
    AdminComponent,

    TopbarComponent,
    MainComponent,
    SidebarComponent
  ],
  providers: [
  ]
})
export class ExpressoModule {}
