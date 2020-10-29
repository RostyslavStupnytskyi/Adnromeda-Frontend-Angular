import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SellerRegistrationComponent} from './seller-registration/seller-registration.component';
import {UserComponent} from '../user/user.component';
import {SellerComponent} from './seller.component';

const routes: Routes = [
  {
    path: '', component: SellerComponent, children: [
      {path: 'registration', component: SellerRegistrationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule {
}
