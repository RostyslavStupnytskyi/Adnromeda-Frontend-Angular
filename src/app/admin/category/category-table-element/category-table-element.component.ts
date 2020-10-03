import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../entity/category/category';
import {GlobalConstants} from '../../../common/global-constants';

@Component({
  selector: 'app-category-table-element',
  templateUrl: './category-table-element.component.html',
  styleUrls: ['./category-table-element.component.scss']
})
export class CategoryTableElementComponent implements OnInit {

  updateButtonCaption = 'Редагувати';
  inUpdate = false;
  @Input() category: Category;
  imageURL: string;

  constructor() {
  }

  ngOnInit(): void {
    this.imageURL  = this.category.imageName ? GlobalConstants.API_URL + 'image/category/' + this.category.imageName : '';
  }

  updateButtonClick(): void {
    if (this.inUpdate) {

      this.updateButtonCaption = 'Редагувати';
    } else {

      this.updateButtonCaption = 'Зберегти';
    }
    this.inUpdate = !this.inUpdate;
  }


}
