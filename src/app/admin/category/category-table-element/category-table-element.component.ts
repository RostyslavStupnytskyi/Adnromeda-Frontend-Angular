import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-table-element',
  templateUrl: './category-table-element.component.html',
  styleUrls: ['./category-table-element.component.scss']
})
export class CategoryTableElementComponent implements OnInit {

  @Input() category;

  constructor() { }

  ngOnInit(): void {
  }

}
