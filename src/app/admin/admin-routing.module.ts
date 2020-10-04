import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryTableComponent} from './category/category-table/category-table.component';

const routes: Routes = [
  // {path: 'category', component: CategoryTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
