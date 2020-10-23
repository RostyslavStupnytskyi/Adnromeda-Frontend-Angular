import {Component, OnInit} from '@angular/core';
import {AccountDialogComponent} from './registarion-dialog/account-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {CategoryService} from '../service/category/category.service';

@Component({
  selector: 'app-app-panel',
  templateUrl: './app-panel.component.html',
  styleUrls: ['./app-panel.component.scss']
})
export class AppPanelComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
  }

  openRegistration(): void {
    const data = {
      registration: true
    };
    const dialogRef = this.dialog.open(AccountDialogComponent, {
        width: '600px',
        data
      })
    ;

    dialogRef.afterClosed().subscribe(result => { //дії пілся закриття вікна
    });
  }

}
