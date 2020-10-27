import {Input, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminModule} from './admin/admin.module';

import {AdminComponent} from './admin/admin.component';
import {AppComponent} from './app.component';
import {Category} from './entity/category/category';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {
    path: 'admin',
    loadChildren: () => {
      return import('./admin/admin.module').then(m => m.AdminModule);
    }
  },
  {
    path: 'user',
    loadChildren: () => {
      return import('./user/user.module').then(m => m.UserModule);
    }
  },
  {
    path: 'seller',
    loadChildren: () => {
      return import('./seller/seller.module').then(m => m.SellerModule);
    }
  }
  // {path: '', redirectTo: '/admin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  @Input() category: Category;
}
