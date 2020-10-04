import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryTableComponent } from './admin/category/category-table/category-table.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryCreatorComponent } from './admin/category/category-creator/category-creator.component';
import {CategoryTableElementComponent} from './admin/category/category-table-element/category-table-element.component';
import {FormsModule} from '@angular/forms';
import {AdminModule} from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoryTableComponent,
    CategoryCreatorComponent,
    CategoryTableElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

