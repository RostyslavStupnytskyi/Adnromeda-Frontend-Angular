import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Category} from '../../../entity/category/category';
import {CategoryService} from '../../../service/category/category.service';
import {GlobalConstants} from '../../../common/global-constants';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements AfterViewInit {
  ELEMENT_DATA: Category[];
  displayedColumns: string[] = ['id', 'title', 'image', 'actions'];
  dataSource: any;

  imageUrl = GlobalConstants.API_URL + 'image/category/';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private categoryService: CategoryService) {
  }
  ngAfterViewInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.ELEMENT_DATA = categories;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      // this.dataSource.paginator = this.paginator;
      console.log(categories);
    });
  }

  getImage(name: string): string{
    return this.imageUrl + name;
  }



}
