import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-confirming-dialog',
  templateUrl: './confirming-dialog.component.html',
  styleUrls: ['../../../common/styles/dialog-window.scss', './confirming-dialog.component.scss' ]
})
export class ConfirmingDialogComponent implements OnInit {


  @Output() result = new EventEmitter<boolean>();
  @Output() isOpened = new EventEmitter<boolean>(); // значення яке повертає стан відкрите/закрите у батьківський елемент

  @Input() title: string;

  @Input()
  set openDialog(open: boolean) {  // функція яка буде відкривати можальне вікно
    this.open = open;
    this.isOpened.emit(this.open);
  }
  open: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  closeButtonClick(): void {
    this.result.emit(false);
    this.closeDialog();
  }

  closeDialog(): void {
    this.open = false;
    this.isOpened.emit(this.open);
  }

  clickWindow($event: MouseEvent): void {
    if ($event.target === document.getElementById('modal')) {
      this.closeDialog();
    }
  }

  clickYesButton(): void {
    this.result.emit(true);
    this.closeButtonClick();
  }
}
