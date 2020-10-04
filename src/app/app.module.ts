import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AdminModule} from './admin/admin.module';
import {AdminComponent} from './admin/admin.component';
import { AppPanelComponent } from './app-panel/app-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  exports: [
    AppPanelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

