import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CategoryService} from '../../../../service/category/category.service';
import {Category} from '../../../../entity/category/category';
import {GlobalConstants} from '../../../../common/global-constants';
import {log} from 'util';

@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.scss', '../../../../common/styles/dialog-window.scss']
})
export class CreateCategoryDialogComponent implements OnInit {

  imageUrl = GlobalConstants.API_URL + 'image/category/';

  @Output() isOpened = new EventEmitter<boolean>(); // значення яке повертає стан відкрите/закрите у батьківський елемент
  @Output() newCategory = new EventEmitter<number>();
  @Output() changes = new EventEmitter<any>();
  @Input()
  set openDialog(open: boolean) {  // функція яка буде відкривати можальне вікно
    this.open = open;
    this.isOpened.emit(this.open);
  }

  @Input()
  set create(categoryId: number) {
    if (categoryId === null) {
      this.headerLabel = 'Створення нової категорії';
      this.buttonLabel = 'Створити';
      this.image = '';
      this.value = '';
      this.isCreate = true;
      this.category = new Category();
    } else {
      this.headerLabel = 'Редагування категорії';
      this.categoryService.getOne(categoryId).subscribe((c) => {
        this.category = c;
        this.categoryService.getCategoryImage(c.id).subscribe((img) => {
          this.image = this.imageUrl + img.image;
        });
        this.value = c.title;
      });
      this.buttonLabel = 'Зберегти';
      this.isCreate = false;
    }
  }

  @ViewChild('imageInput')
  imageInput: ElementRef;

  open: boolean;
  headerLabel: string;
  buttonLabel: string;
  // image = 'https://sisterhoodofstyle.com/wp-content/uploads/2018/02/no-image-1.jpg';
  image: string;
  value = '';
  category: Category;
  isCreate: boolean;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
  }

  closeButtonClick(): void {
    this.closeDialog();
  }

  closeDialog(): void {
    this.open = false;
    this.imageInput.nativeElement.value = '';
    this.isOpened.emit(this.open);
  }

  clickWindow($event: MouseEvent): void {
    if ($event.target === document.getElementById('modal')) {
      this.closeDialog();
    }
  }

  onImageClick(): void {
    const img = document.getElementById('category-image-input');
    img.click();
  }

  handleUpload(event): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.image = reader.result.toString();
    };
  }

  createButtonClick(): void {
    if (this.value !== '') {
      if (this.isCreate) {
        if (this.image !== '') {
          this.category.title = this.value;
          this.category.imageName = this.image;
          this.categoryService.postCategory(this.category).subscribe((id) => {
            this.newCategory.emit(id);
            this.closeDialog();
            this.changes.emit();
          });
        }
      } else {
        let newImg;
        if (this.imageInput.nativeElement.value === ''){
          newImg = null;
        } else {
          newImg = this.image;
        }
        this.category.imageName = newImg;
        this.category.title = this.value;
        this.categoryService.putCategory(this.category).subscribe(() => {
          this.closeDialog();
          this.changes.emit();
        });
      }
    }
  }
}
