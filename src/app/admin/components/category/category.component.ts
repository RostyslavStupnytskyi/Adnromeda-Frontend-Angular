import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../service/category/category.service';
import {GlobalConstants} from '../../../common/global-constants';
import {Category} from '../../../entity/category/category';
import {MatDialog} from '@angular/material/dialog';
import {CategoryDialogComponent} from './category-dialog/category-dialog.component';
import {ConfirmDialogComponent} from '../../common/confirm-dialog/confirm-dialog.component';

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

  categories: Category[];


  constructor(private categoryService: CategoryService, public dialog: MatDialog) {

  }

  createButtonClick(): void {
    this.openDialog(null);
  }

  clickUpdateButton(id: number): void {
    this.openDialog(id);
  }

  openDialog(id: number): void {
    if (id === null) {

      const dialogRef = this.dialog.open(CategoryDialogComponent, {
        data: null
      });

      dialogRef.afterClosed().subscribe(result => { //дії пілся закриття вікна
        this.reloadTable();
      });

    } else {
      this.categoryService.getOne(id).subscribe((c) => {
        this.categoryService.getCategoryImage(id).subscribe((img) => {
          c.imageName = img.image;
          const dialogRef = this.dialog.open(CategoryDialogComponent, {
            data: c
          });

          dialogRef.afterClosed().subscribe(result => {
            this.reloadTable();
          });

        });
      });
    }

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

  reloadTable(): void {
    this.getCategoriesPage();
  }


  clickDeleteButton(id: number) {
    this.categoryService.getOne(id).subscribe((category) => {
      const data = {
        message: 'Ви дійсно хочете видалити категорію "' + category.title + '" ?'
      };
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '600px',
        data
      });

      dialogRef.afterClosed().subscribe(result => { //дії пілся закриття вікна
        console.log(result.result);
        if (result.result) {
          this.categoryService.deleteCategory(id).subscribe(() => {
            this.reloadTable();
          });
        }
      });
    });
  }
}
