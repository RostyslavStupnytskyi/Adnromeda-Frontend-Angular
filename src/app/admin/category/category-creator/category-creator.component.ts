import { Component, OnInit } from '@angular/core';
import {Category} from '../../../entity/category/category';

@Component({
  selector: 'app-category-creator',
  templateUrl: './category-creator.component.html',
  styleUrls: ['./category-creator.component.scss']
})
export class CategoryCreatorComponent implements OnInit {

  title = '';
  image: string | ArrayBuffer;

  constructor() { }

  ngOnInit(): void {
  }

  createCategory(){

  }

  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.image = reader.result;
    };
  }

}
