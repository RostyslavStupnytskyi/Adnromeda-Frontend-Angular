import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../service/category/category.service';
import {GlobalConstants} from '../../../common/global-constants';
import {Category} from '../../../entity/category/category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  imageUrl = GlobalConstants.API_URL + 'image/category/';
  totalPages: number;
  page = 0;
  pageSize = 10;
  field = 'id';
  increment = true;
  categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  getImage(name: string): string {
    return this.imageUrl + name;
  }

  ngOnInit(): void {
    this.categoryService.getCategoriesPage(this.pageSize, this.page, this.field, this.increment).subscribe((response) => {
      this.totalPages = response.totalPages;
      this.categories = response.data;
    });
    // this.categoryService.getCategories().subscribe((categories) => {
    //   console.log(categories);
    // });
  }


}
