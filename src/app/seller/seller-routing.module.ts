import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SellerRegistrationComponent} from './seller-registration/seller-registration.component';

const routes: Routes = [
  {
    path: 'registration', component: SellerRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
