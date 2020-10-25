import {Injectable} from '@angular/core';
import {GlobalConstants} from '../../common/global-constants';
import {Observable} from 'rxjs';
import {Subcategory} from '../../entity/subcategory/subcategory';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../entity/category/category';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  private subcategoriesUrl = GlobalConstants.API_URL + 'subcategory';

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
  }

  // http://localhost:8080/category?direction=ASC&field=id&page=0&size=10
  public getSubcategoriesPage(pageSize: number, page: number, field: string, inc: boolean): Observable<any> {
    const direction = inc ? 'ASC' : 'DESC';
    const url = this.subcategoriesUrl + '?direction' + direction + '&field=' + field + '&page=' + page + '&size=' + pageSize;
    return this.httpClient.get<Subcategory[]>(url);
  }

  public getOne(id: number): Observable<Subcategory> {
    const url = this.subcategoriesUrl + '/one?id=' + id;
    return this.httpClient.get<Subcategory>(url);
  }

  public postSubcategory(subcategory: Subcategory): Observable<number> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('user_token')
    };
    return this.httpClient.post<number>(this.subcategoriesUrl, subcategory,{headers});
  }

  public deleteSubcategory(id: number): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('user_token')
    };
    return this.httpClient.delete(this.subcategoriesUrl + '?id=' + id,{headers});
  }

  public putSubcategory(subcategory: Subcategory): Observable<any> {
    const url = this.subcategoriesUrl + '?id=' + subcategory.id;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('user_token')
    };
    subcategory.id = undefined;
    return this.httpClient.put<number>(url, subcategory,{headers});
  }

}
