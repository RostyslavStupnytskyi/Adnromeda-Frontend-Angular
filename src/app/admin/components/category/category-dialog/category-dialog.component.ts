import {Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Category} from '../../../../entity/category/category';
import {CategoryService} from '../../../../service/category/category.service';
import {GlobalConstants} from '../../../../common/global-constants';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss', '../../../../common/styles/dialog-window.scss', '../../../../common/styles/input.scss']
})
export class CategoryDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CategoryDialogComponent>, private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public category: Category) {
    if (category === null) {
      this.headerLabel = 'Створення категорії';
      this.buttonLabel = 'Створити';
    } else {
      this.image = this.imageUrl + category.imageName;
      this.categoryTitle = category.title;
      this.headerLabel = 'Редагування категорії';
      this.buttonLabel = 'Збрегети';
    }
  }
  imageUrl = GlobalConstants.API_URL + 'image/category/';

  @ViewChild('imageInput')
  imageInput: ElementRef;

  headerLabel: string;
  buttonLabel: string;

  image: string;
  categoryTitle: string;

  onNoClick(): void {
    this.dialogRef.close();
  }

  createButtonClick(): void {
    if (this.categoryTitle !== '') {
      if (this.category === null) {
        if (this.image !== '') {
          this.category = new Category();
          this.category.title = this.categoryTitle;
          this.category.imageName = this.image;
          this.categoryService.postCategory(this.category).subscribe(() => {
            this.dialogRef.close();
          });
        }
      } else {
        let newImg;
        if (this.imageInput.nativeElement.value === '') {
          newImg = null;
        } else {
          newImg = this.image;
        }
        this.category.imageName = newImg;
        this.category.title = this.categoryTitle;
        this.categoryService.putCategory(this.category).subscribe(() => {
          this.dialogRef.close();
        });
      }
    }
  }

  onImageClick(): void {
    document.getElementById('category-image-input').click();
  }

  handleUpload(event): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.image = reader.result.toString();
    };
  }
}
