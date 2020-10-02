import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryTableComponent } from './admin/category/category-table/category-table.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryCreatorComponent } from './admin/category/category-creator/category-creator.component';
import {CategoryTableElementComponent} from './admin/category/category-table-element/category-table-element.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
