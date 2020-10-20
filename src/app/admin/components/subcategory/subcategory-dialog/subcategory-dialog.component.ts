import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CategoryService} from '../../../../service/category/category.service';
import {Category} from '../../../../entity/category/category';
import {SubcategoryService} from '../../../../service/subcategory/subcategory.service';
import {Subcategory} from '../../../../entity/subcategory/subcategory';

@Component({
  selector: 'app-subcategory-dialog',
  templateUrl: './subcategory-dialog.component.html',
  styleUrls: ['./subcategory-dialog.component.scss', '../../../../common/styles/dialog-window.scss']
})
export class SubcategoryDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SubcategoryDialogComponent>, private subcategoryService: SubcategoryService,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public subcategory: Subcategory) {
    this.getCategories();
    if (subcategory === null) {
      this.headerLabel = 'Створення підкатегорії';
      this.buttonLabel = 'Створити';
      this.subcategory = new Subcategory();
      this.subcategory.categoryId = 0;
    } else {
      this.headerLabel = 'Редагування підкатегорії';
      this.buttonLabel = 'Зберегти';
    }
  }

  categories: Category[];
  headerLabel: string;
  buttonLabel: string;

  getCategories(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveButtonClick(): void {
    console.log(this.subcategory.categoryId);
    console.log(this.subcategory.title);
    if (this.subcategory.id === undefined) {
      if (this.isValidTitle() && this.isValidCategoryId()) {
        this.subcategoryService.postSubcategory(this.subcategory).subscribe(() => {
          this.dialogRef.close();
        });
      }
    } else {
      this.subcategoryService.putSubcategory(this.subcategory).subscribe( () => {
        this.dialogRef.close();
      });
    }
  }

  isValidTitle(): boolean {
    return !(this.subcategory.title === undefined || this.subcategory.title === '');
  }

  isValidCategoryId(): boolean {
    return this.subcategory.categoryId !== 0;
  }
}
