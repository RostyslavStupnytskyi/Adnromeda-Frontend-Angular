import { Injectable } from '@angular/core';
import {AccountRegistration} from '../../entity/dto/account/account-registration';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from '../../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private httpClient: HttpClient) { }

  registerUser(registerAccount: AccountRegistration): Observable<any> {
    const url = GlobalConstants.API_URL + 'account/register-user';
    return  this.httpClient.post(url, registerAccount);
  }
}
