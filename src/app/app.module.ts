import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {appRoutes} from './routes';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ExpressoModule} from '@kyjus25/expresso';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ExpressoModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
