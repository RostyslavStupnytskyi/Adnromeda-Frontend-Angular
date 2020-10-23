import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SubcategoryService} from '../../service/subcategory/subcategory.service';
import {CategoryService} from '../../service/category/category.service';
import {Subcategory} from '../../entity/subcategory/subcategory';
import {AccountService} from '../../service/account/account.service';
import {Account} from '../../entity/account/account';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.scss']
})
export class AccountDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AccountDialogComponent>,
    private accountService: AccountService,
    private cookieService: CookieService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (this.data.registration) {
      this.buttonLabel = 'Зареєструватись';
    } else {
      this.buttonLabel = 'Увійти';
    }
  }

  account = new Account();
  registration = this.data.registration;
  passwordInputType = 'password';
  buttonLabel: string;

  changePasswordType(): void {
    if (this.passwordInputType === 'password') {
      this.passwordInputType = 'text';
    } else {
      this.passwordInputType = 'password';
    }
  }

  makeRegistrationForm(): void {
    this.registration = true;
    this.buttonLabel = 'Зареєструватись';
  }

  makeLoginForm(): void {
    this.registration = false;
    this.buttonLabel = 'Увійти';
  }


  mainButtonClick(): void {
    console.log(this.account);
    this.accountService.registerUser(this.account).subscribe((response) => {
      this.cookieService.set('user_token', response.token);
      console.log(response);
    });
  }
}
