import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../../entity/category/category';
import {GlobalConstants} from '../../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesUrl = GlobalConstants.API_URL + 'category';
  test: any;

  constructor(private httpClient: HttpClient) {

  }

  public getCategories(): Observable<Array<Category>> {
    return this.httpClient.get<Category[]>(this.categoriesUrl);
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

  public postCategory(category: Category): void {
    const headers = {
      'Content-Type': 'application/json'
    };
    const body = {
      title: category.title,
      image: category.imageName
    };
    this.httpClient.post<Category>(this.categoriesUrl, body).subscribe(data => {
      this.test = data;
    });
  }
}
