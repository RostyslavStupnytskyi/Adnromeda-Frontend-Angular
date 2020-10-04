import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';;
import { CategoryComponent } from './components/category/category.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { ModeratorsComponent } from './components/moderators/moderators.component';


@NgModule({
  declarations: [AdminComponent, CategoryComponent, SubcategoryComponent, ModeratorsComponent, ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
