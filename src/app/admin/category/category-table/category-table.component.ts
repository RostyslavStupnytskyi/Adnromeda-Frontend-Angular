import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../service/category/category.service';
import {Category} from '../../../entity/category/category';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {

  categories: Array<Category>;

  constructor(private categoryService: CategoryService) {
    categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  ngOnInit(): void {

  }

}
