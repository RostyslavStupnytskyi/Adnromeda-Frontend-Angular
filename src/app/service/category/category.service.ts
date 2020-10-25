import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../../entity/category/category';
import {GlobalConstants} from '../../common/global-constants';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesUrl = GlobalConstants.API_URL + 'category';
  test: any;

  constructor(private httpClient: HttpClient, public cookieService: CookieService) {

  }

  public getCategories(): Observable<Array<Category>> {
    const url = this.categoriesUrl + '/all';
    return this.httpClient.get<Category[]>(url);
  }

  // http://localhost:8080/category?direction=ASC&field=id&page=0&size=10
  public getCategoriesPage(pageSize: number, page: number, field: string, inc: boolean): Observable<any> {
    const direction = inc ? 'ASC' : 'DESC';
    const url = this.categoriesUrl + '?direction' + direction + '&field=' + field + '&page=' + page + '&size=' + pageSize;
    return this.httpClient.get<Category[]>(url);
  }

  public getCategoryImage(id: number): Observable<any> {
    const url = this.categoriesUrl + '/img?id=' + id;
    return this.httpClient.get<any>(url);
  }

  public getOne(id: number): Observable<Category> {
    const url = this.categoriesUrl + '/one?id=' + id;
    return this.httpClient.get<Category>(url);
  }

  public postCategory(category: Category): Observable<number> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('user_token')
    };
    const body = {
      title: category.title,
      image: category.imageName
    };
    return this.httpClient.post<number>(this.categoriesUrl, body, {headers});
  }

  public deleteCategory(id: number): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('user_token')
    };
    return this.httpClient.delete(this.categoriesUrl + '?id=' + id, {headers});
  }

  public putCategory(category: Category): Observable<any> {
    const url = this.categoriesUrl + '?id=' + category.id;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('user_token')
    };
    const body = {
      title: category.title,
      image: category.imageName
    };
    return this.httpClient.put<number>(url, body, {headers});
  }
}
