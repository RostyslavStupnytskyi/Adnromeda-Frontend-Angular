import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-paginator',
  templateUrl: './admin-paginator.component.html',
  styleUrls: ['./admin-paginator.component.scss']
})
export class AdminPaginatorComponent implements OnInit {

  @Input() pageSizes: number[] = [5, 10, 25];
  @Input() totalElements = 200;
  @Input() totalPages;
  @Input() lastPageButtons: boolean;
  pageSize: number;
  pageNumber = 0;
  rangeLabel: string;
  constructor() { }

  ngOnInit(): void {
    this.pageSize = this.pageSizes[0];
    this.totalPages = this.totalElements / this.pageSize;
    this.changeLabel();
  }

  log(): void {
    this.pageNumber = 0;
    this.totalPages = this.totalElements / this.pageSize;
    this.changeLabel();
  }

  previousButtonClick(): void{
    if (this.pageNumber > 0) {
      this.pageNumber--;
      this.changeLabel();
    }
  }

  firstButtonClick(): void{
      this.pageNumber = 0;
      this.changeLabel();
  }

  lastButtonClick(): void{
    this.pageNumber =  this.totalPages - 1;
    this.changeLabel();
  }

  nextButtonClick(): void{
    if (this.pageNumber < this.totalPages - 1) {
      this.pageNumber++;
      this.changeLabel();
    }
  }

  changeLabel(): void{
    this.rangeLabel = this.getRangeLabel();
  }

  getRangeLabel(): string {
    let length = this.totalElements;
    if (length === 0 || this.pageSize === 0) {
      return '0 ' + ' із ' + ' ' + length;
    }
    length = Math.max(this.totalElements, 0);
    const startIndex: number = this.pageNumber *  this.pageSize;
    const endIndex = startIndex + +this.pageSize < length ? startIndex + +this.pageSize : length;

    return startIndex + 1 + ' - ' + endIndex + ' із ' + length;
  };
}
