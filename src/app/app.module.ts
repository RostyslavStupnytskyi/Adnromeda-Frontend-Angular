import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppPanelComponent } from './app-panel/app-panel.component';
import { VerticalDividerComponent } from './common/vertical-divider/vertical-divider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { AccountDialogComponent } from './app-panel/registarion-dialog/account-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
//
@NgModule({
  declarations: [
    AppComponent,
    AppPanelComponent,
    VerticalDividerComponent,
    AccountDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
    // AdminModule
  ],
  providers: [CookieService],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

