import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../../entity/category/category';
import {GlobalConstants} from '../../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesUrl = GlobalConstants.API_URL + 'category';

  constructor(private httpClient: HttpClient) {

  }

  public getCategories(): Observable<Array<Category>> {
    return this.httpClient.get<Category[]>(this.categoriesUrl);
  }

  // public postCategory(title: string, image: string):void {
  //   this.httpClient.post(categoriesUrl, )
  // }
}
