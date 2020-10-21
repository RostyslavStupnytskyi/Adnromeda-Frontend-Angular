import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryComponent} from './components/category/category.component';
import {AdminComponent} from './admin.component';

import {SubcategoryComponent} from './components/subcategory/subcategory.component';
import {ModeratorsComponent} from './components/moderators/moderators.component';
import {AdminsComponent} from './components/admins/admins.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: '', redirectTo: 'category'},
      {path: 'category', component: CategoryComponent},
      {path: 'moderator', component: ModeratorsComponent},
      {path: 'subcategory', component: SubcategoryComponent},
      {path: 'moderators', component: ModeratorsComponent},
      {path: 'admins', component: AdminsComponent},
      // {path: 'users', component: UsersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
