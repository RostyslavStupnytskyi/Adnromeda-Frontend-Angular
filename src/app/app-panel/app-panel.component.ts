import {Component, OnInit} from '@angular/core';
import {AccountDialogComponent} from './registarion-dialog/account-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {CategoryService} from '../service/category/category.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-app-panel',
  templateUrl: './app-panel.component.html',
  styleUrls: ['./app-panel.component.scss']
})
export class AppPanelComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private categoryService: CategoryService,
    private cookieService: CookieService
  ) {
  }

  username: string;

  ngOnInit(): void {
    this.getUserInfo();
  }

  openRegistration(reg: boolean): void {
    const data = {
      registration: reg
    };
    const dialogRef = this.dialog.open(AccountDialogComponent, {
        width: '600px',
        data
      })
    ;

    dialogRef.afterClosed().subscribe(result => { //дії пілся закриття вікна
      this.getUserInfo();
    });
  }

  getUserInfo(): void {
    this.cookieService.get('user_name') ? this.username = this.cookieService.get('user_name') : this.username = undefined;
  }

  logout(): void {
    this.cookieService.delete('user_name');
    this.getUserInfo();
  }
}
