import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from '../../common/global-constants';
import {CookieService} from 'ngx-cookie-service';
import {Category} from '../../entity/category/category';
import {Observable} from 'rxjs';
import {AdvertisementRequest} from '../../entity/advertisement/advertisementRequest/advertisement-request';
import {PropertiesRequest} from '../../entity/advertisement/propertiesRequest/properties-request';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  private advertisementUrl = GlobalConstants.API_URL + 'advertisement';

  constructor(private httpClient: HttpClient, public cookieService: CookieService) { }

  public postAdvertisement(advertisement: AdvertisementRequest): Observable<number> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('user_token')
    };
    return this.httpClient.post<number>(this.advertisementUrl, advertisement, {headers});
  }

  public postProperties(properties: PropertiesRequest): Observable<any> {
    const url = GlobalConstants.API_URL + 'property';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('user_token')
    };
    return this.httpClient.post<number>(url, properties, {headers});
  }
}
