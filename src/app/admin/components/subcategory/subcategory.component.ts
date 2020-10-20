import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from '../../../common/global-constants';
import {Category} from '../../../entity/category/category';
import {Subcategory} from '../../../entity/subcategory/subcategory';
import {SubcategoryService} from '../../../service/subcategory/subcategory.service';
import {CategoryService} from '../../../service/category/category.service';
import {CategoryDialogComponent} from '../category/category-dialog/category-dialog.component';
import {SubcategoryDialogComponent} from './subcategory-dialog/subcategory-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../common/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss', '../../admin-styles/admin-table-style.scss']
})
export class SubcategoryComponent implements OnInit {
  imageUrl = GlobalConstants.API_URL + 'image/category/';

  totalPages: number;
  totalElements;

  pageSizes = [10, 25]; // змінна що йде у пагінатор для вибору кількості елментів на сторінку

  page = 0; // номер сторінки на яку робить запит (спочатку 0 потім - задана пагінатором)
  pageSize = this.pageSizes[0]; // розмір сторінки ( перший раз робить запит на мінімальний розмір)

  field = 'id'; // поле за яким буде йти сортування сторінки
  increment = true; // true - за зростанням , false - за спаданням

  subcategories: Subcategory[];
  categories: Category[];

  constructor(private subcategoryService: SubcategoryService, private categoryService: CategoryService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getSubcategoriesPage();
    this.getCategories();
    if (this.totalElements === undefined) {
      this.totalElements = 0;
    }
  }

  getSubcategoriesPage(): void {
    this.subcategoryService.getSubcategoriesPage(this.pageSize, this.page, this.field, this.increment).subscribe((response) => {
      this.totalPages = response.totalPages;
      this.subcategories = response.data;
      this.totalElements = response.totalElements;
      this.subcategories.forEach((subcategory) => {
        this.categoryService.getOne(subcategory.categoryId).subscribe((category) => {
          subcategory.category = category;
        });
      });
    });
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((cat) => {
      this.categories = cat;
    });
  }

  handlePageChange(page: Array<number>): void {
    this.page = page[0];
    this.pageSize = page[1];
    this.getSubcategoriesPage();
  }

  reloadTable(): void {
    this.getSubcategoriesPage();
  }


  createSubcategoryButtonClick(): void {
    const dialogRef = this.dialog.open(SubcategoryDialogComponent, {
      data: null
    });
    dialogRef.afterClosed().subscribe(result => { //дії після закриття вікна
      this.reloadTable();
    });
  }

  updateSubcategoryButtonClick(subcategory: Subcategory): void {
    const dialogRef = this.dialog.open(SubcategoryDialogComponent, {
      data: subcategory
    });
    dialogRef.afterClosed().subscribe(result => { //дії після закриття вікна
      this.reloadTable();
    });
  }

  clickDeleteButton(subcategory: Subcategory): void {
      const data = {
        message: 'Ви дійсно хочете видалити підкатегорію "' + subcategory.title + '" ?'
      };
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '600px',
        data
      });

      dialogRef.afterClosed().subscribe(result => { //дії пілся закриття вікна
        if (result.result) {
          this.subcategoryService.deleteSubcategory(subcategory.id).subscribe(() => {
            this.reloadTable();
          });
        }
      });
  }
}
