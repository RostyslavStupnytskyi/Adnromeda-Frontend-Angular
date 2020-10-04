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
