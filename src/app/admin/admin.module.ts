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
import {MatButtonModule} from '@angular/material/button';
import { CreateCategoryDialogComponent } from './components/category/create-category-dialog/create-category-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ConfirmingDialogComponent } from './common/confirming-dialog/confirming-dialog.component';

@NgModule({
  declarations: [AdminComponent, CategoryComponent, SubcategoryComponent, ModeratorsComponent, UsersComponent, AdminsComponent, AdminPaginatorComponent, CreateCategoryDialogComponent, ConfirmingDialogComponent],
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
        MatIconModule
    ]
})
export class AdminModule {
}
