import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from '../admin/admin.component';
import {CategoryComponent} from '../admin/components/category/category.component';
import {ModeratorsComponent} from '../admin/components/moderators/moderators.component';
import {SubcategoryComponent} from '../admin/components/subcategory/subcategory.component';
import {AdminsComponent} from '../admin/components/admins/admins.component';
import {UserComponent} from './user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
    ]
  },
  {

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
