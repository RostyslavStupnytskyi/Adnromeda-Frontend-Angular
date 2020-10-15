import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-admin-paginator',
  templateUrl: './admin-paginator.component.html',
  styleUrls: ['./admin-paginator.component.scss']
})
export class AdminPaginatorComponent implements OnInit {

  @Input() pageSizes: number[] = [5, 10, 25]; // масив чисел для розміру сорінок
  @Input() totalElements: number; // загальна кількість елементів
  @Input() totalPages: number;   // загальна кількість сторінок
  @Input() lastPageButtons: boolean; // якшо вводиться true будуть видимі кнопки перша та остання сторінка
  @Input() pageNumber = 0; // номер сторінки
  @Output() pageEmmit = new EventEmitter<Array<number>>(); // обробник зміни даних пагінатора
  pageSize: number; //розмір сторінки
  rangeLabel: string;  // напис для виводу номеру елемнтів

  constructor() {
  }

  ngOnInit(): void {
    this.pageSize = this.pageSizes[0];
    this.totalPages = this.totalElements / this.pageSize;
    console.log('total : ' + this.totalElements);
    this.changeLabel();
  }

  // Відправити дані у батьківський компонент
  emmitChanges(): void {
    const page = [this.pageNumber, this.pageSize]; // у 0 комірку записати номер сторінки, у 1 комірку розмір
    this.pageEmmit.emit(page);
  }

  // Обробник події коли користувач змінює розмір сторінки
  changePageSize(): void {
    this.pageNumber = 0;
    this.totalPages = this.totalElements / this.pageSize;
    this.changeLabel();
  }

  previousButtonClick(): void {
    if (this.pageNumber > 0) {
      this.pageNumber--;
      this.changeLabel();
    }
    this.emmitChanges();
  }

  firstButtonClick(): void {
    this.pageNumber = 0;
    this.changeLabel();
    this.emmitChanges();
  }

  lastButtonClick(): void {
    this.pageNumber = +this.totalPages - 1;
    this.changeLabel();
    this.emmitChanges();
  }

  nextButtonClick(): void {
    if (this.pageNumber < this.totalPages - 1) {
      this.pageNumber++;
      this.changeLabel();
    }
    this.emmitChanges();
  }

  changeLabel(): void {
    this.rangeLabel = this.getRangeLabel();
  }

  getRangeLabel(): string {

    let length = this.totalElements;
    if (length === 0 || this.pageSize === 0) {
      return '0 ' + ' із ' + ' ' + length;
    }
    length = Math.max(this.totalElements, 0);
    const startIndex: number = this.pageNumber * this.pageSize;
    const endIndex = startIndex + +this.pageSize < length ? startIndex + +this.pageSize : length;

    return startIndex + 1 + ' - ' + endIndex + ' із ' + length;
  };
}
