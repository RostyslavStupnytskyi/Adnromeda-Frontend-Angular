import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminModule} from './admin/admin.module';
import {CategoryTableComponent} from './admin/category/category-table/category-table.component';

const routes: Routes = [
  {path: 'admin', component: AdminModule},
  {path: 'category', component: CategoryTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
