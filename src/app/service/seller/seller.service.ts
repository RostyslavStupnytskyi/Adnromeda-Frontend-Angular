import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Account} from '../../entity/account/account';
import {Observable} from 'rxjs';
import {GlobalConstants} from '../../common/global-constants';
import {SellerRegistration} from '../../entity/account/seller-registration/seller-registration';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private httpClient: HttpClient) { }

  registerSeller(sellerRegistration: SellerRegistration): Observable<any> {
    const url = GlobalConstants.API_URL + 'account/register-seller';
    return this.httpClient.post(url, sellerRegistration);
  }
}
