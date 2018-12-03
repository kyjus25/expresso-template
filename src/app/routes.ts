import {Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from '@kyjus25/expresso';
import {AdminComponent} from '@kyjus25/expresso/src/admin/admin.component';

export const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: '', component: AppComponent},
  {path: '**', component: AppComponent}
];
