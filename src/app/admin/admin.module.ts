import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';;
import {AppModule} from '../app.module';


@NgModule({
  declarations: [AdminComponent, ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppModule
  ]
})
export class AdminModule { }
