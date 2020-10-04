import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


@NgModule({
  declarations: [AdminComponent, AdminPanelComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
