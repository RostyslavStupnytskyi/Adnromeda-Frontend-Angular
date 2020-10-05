import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryComponent} from './components/category/category.component';
import {AdminComponent} from './admin.component';

import {SubcategoryComponent} from './components/subcategory/subcategory.component';
import {ModeratorsComponent} from './components/moderators/moderators.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: '', redirectTo: 'category'},
      {path: 'category', component: CategoryComponent},
      {path: 'subcategory', component: SubcategoryComponent},
      {path: 'moderators', component: ModeratorsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
