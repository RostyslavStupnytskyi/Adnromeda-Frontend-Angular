import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';

import {CategoryComponent} from './components/category/category.component';
import {SubcategoryComponent} from './components/subcategory/subcategory.component';
import {ModeratorsComponent} from './components/moderators/moderators.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {UsersComponent} from './components/users/users.component';
import {AdminsComponent} from './components/admins/admins.component';
import {AdminPaginatorComponent} from './common/admin-paginator/admin-paginator.component';
import {CreateCategoryDialogComponent} from './components/category/create-category-dialog/create-category-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [AdminComponent, CategoryComponent, SubcategoryComponent, ModeratorsComponent, UsersComponent, AdminsComponent, AdminPaginatorComponent, CreateCategoryDialogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class AdminModule {
}
