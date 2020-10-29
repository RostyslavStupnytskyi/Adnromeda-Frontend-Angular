import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [SellerComponent, SellerRegistrationComponent],
  imports: [
    CommonModule,
    SellerRoutingModule,
    FormsModule
  ]
})
export class SellerModule { }
