import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../service/category/category.service';
import {GlobalConstants} from '../../../common/global-constants';
import {Category} from '../../../entity/category/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss', '../../admin-styles/admin-table-style.scss']
})
export class CategoryComponent implements OnInit {

  imageUrl = GlobalConstants.API_URL + 'image/category/';

  totalPages: number;
  totalElements: number;

  pageSizes = [10, 25]; // змінна що йде у пагінатор для вибору кількості елментів на сторінку

  page = 0; // номер сторінки на яку робить запит (спочатку 0 потім - задана пагінатором)
  pageSize = this.pageSizes[0]; // розмір сторінки ( перший раз робить запит на мінімальний розмір)

  field = 'id'; // поле за яким буде йти сортування сторінки
  increment = true; // true - за зростанням , false - за спаданням
  openDialogWindow: boolean; //змінна для оприділення закритого/відкритого модального вікна
  openConfirmWindow: boolean;
  categoryUpdateId = null;
  confirmDialogText: string;
  categories: Category[];


  constructor(private categoryService: CategoryService) {

  }

  getImage(name: string): string {
    return this.imageUrl + name;
  }

  ngOnInit(): void {
    this.getCategoriesPage();
  }

  createCategoryButtonClick(): void {
    this.categoryUpdateId = null;
    this.openDialog();
  }

  dialogChange($event: boolean): void {
    this.openDialogWindow = $event;
  }

  openDialog(): void {
    this.openDialogWindow = true;
  }

  //  запит на отримання сторінки з сервера
  getCategoriesPage(): void {
    this.categoryService.getCategoriesPage(this.pageSize, this.page, this.field, this.increment).subscribe((response) => {
      this.totalPages = response.totalPages;
      this.categories = response.data;
      this.totalElements = response.totalElements;
      this.categories.forEach((c) => {
        this.categoryService.getCategoryImage(c.id).subscribe((img) => {
          c.imageName = img.image;
        });
      });
    });
  }

  // коли змінюються дані на пагінаторі
  handlePageChange(page: Array<number>): void {
    this.page = page[0];
    this.pageSize = page[1];
    this.getCategoriesPage();
  }


  clickUpdateButton(id: number): void {
    this.categoryUpdateId = id;
    this.openDialog();
  }

  reloadTable($event: any): void {
    this.getCategoriesPage();
  }

  clickDeleteButton(id: number): void {
    this.categoryService.getOne(id).subscribe((c) => {
      this.confirmDialogText = 'Видалити категорію "' + c.title + '" ?';
      this.openConfirmDialog();
    });
  }

  openConfirmDialog(): void {
    this.openConfirmWindow = true;
  }

  dialogConfirmChange($event: boolean): void {
    this.openConfirmWindow = $event;
  }
}
