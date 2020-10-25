import {Injectable} from '@angular/core';
import {Account} from '../../entity/account/account';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from '../../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private httpClient: HttpClient) {
  }

  registerUser(registerAccount: Account): Observable<any> {
    const url = GlobalConstants.API_URL + 'account/register-user';
    return this.httpClient.post(url, registerAccount);
  }

  authorization(account: Account): Observable<any> {
    const request = {
      login : account.login,
      password: account.password
    };
    const url = GlobalConstants.API_URL + 'account/login';

    return this.httpClient.post(url, request);
  }
}
