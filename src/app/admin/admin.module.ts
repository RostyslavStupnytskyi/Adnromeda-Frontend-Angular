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
import {AdminsComponent} from './components/admins/admins.component';
import {AdminPaginatorComponent} from './common/admin-paginator/admin-paginator.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {CategoryDialogComponent} from './components/category/category-dialog/category-dialog.component';
import {MatInputModule} from '@angular/material/input';
import { ConfirmDialogComponent } from './common/confirm-dialog/confirm-dialog.component';
import { SubcategoryDialogComponent } from './components/subcategory/subcategory-dialog/subcategory-dialog.component';

@NgModule({
  declarations: [AdminComponent, CategoryComponent, SubcategoryComponent, ModeratorsComponent, AdminsComponent, AdminPaginatorComponent, CategoryDialogComponent, ConfirmDialogComponent, SubcategoryDialogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class AdminModule {
}

