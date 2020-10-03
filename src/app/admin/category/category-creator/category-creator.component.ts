import {Component, OnInit} from '@angular/core';
import {Category} from '../../../entity/category/category';
import {CategoryService} from '../../../service/category/category.service';
import {Converter} from '../../../common/converter';

@Component({
  selector: 'app-category-creator',
  templateUrl: './category-creator.component.html',
  styleUrls: ['./category-creator.component.scss']
})
export class CategoryCreatorComponent implements OnInit {

  title = '';
  imageData: string | ArrayBuffer;
  category: Category = new Category();

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {

  }
  onChange(): void {
    console.log(this.title);
  }

  createCategory(): void {
    console.log('title ' + this.title);
    console.log('cate title ' + this.category.title);
    this.category.title = this.title;
    console.log('cat after title' + this.category.title);
    // this.category.imageName = Converter.arrayBufferToString(this.imageData);
    this.category.imageName = this.imageData.toString();

    this.categoryService.postCategory(this.category);
  }

  handleUpload(event): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageData = reader.result.toString();
    };
  }

}
