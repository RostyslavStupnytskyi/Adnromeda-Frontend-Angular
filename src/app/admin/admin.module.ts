import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';;
import { CategoryComponent } from './components/category/category.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { ModeratorsComponent } from './components/moderators/moderators.component';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {AdminPaginator} from './common/admin-paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [AdminComponent, CategoryComponent, SubcategoryComponent, ModeratorsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: AdminPaginator}
  ]
})
export class AdminModule { }
