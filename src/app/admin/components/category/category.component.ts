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
  totalElements: number;

  pageSizes = [5, 10, 25]; // змінна що йде у пагінатор для вибору кількості елментів на сторінку

  page = 0; // номер сторінки на яку робить запит (спочатку 0 потім - задана пагінатором)
  pageSize = this.pageSizes[0]; // розмір сторінки ( перший раз робить запит на мінімальний розмір)

  field = 'id'; // поле за яким буде йти сортування сторінки
  increment = true; // true - за зростанням , false - за спаданням

  categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  getImage(name: string): string {
    return this.imageUrl + name;
  }

  ngOnInit(): void {
    this.getCategoriesPage();
  }

  //  запит на отримання сторінки з сервера
  getCategoriesPage(): void {
    this.categoryService.getCategoriesPage(this.pageSize, this.page, this.field, this.increment).subscribe((response) => {
      this.totalPages = response.totalPages;
      this.categories = response.data;
      this.totalElements = response.totalElements;
      console.log(this.categories);
    });
  }

  // коли змінюються дані на пагінаторі
  handlePageChange(page: Array<number>): void {
    this.page = page[0];
    this.pageSize = page[1];
    this.getCategoriesPage();
  }
}
