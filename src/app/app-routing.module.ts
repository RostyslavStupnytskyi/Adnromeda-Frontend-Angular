import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminModule} from './admin/admin.module';

import {AdminComponent} from './admin/admin.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: 'admin',
  loadChildren: () => {
    return import('./admin/admin.module').then(m => m.AdminModule);
  }},
  {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
