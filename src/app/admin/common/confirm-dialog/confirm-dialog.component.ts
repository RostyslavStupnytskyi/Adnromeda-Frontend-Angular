import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss', '../../../common/styles/dialog-window.scss']
})
export class ConfirmDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  onYesClick(): void {
    this.data.result = true;
    this.dialogRef.close(this.data);
  }

  onNoClick(): void {
    this.data.result = false;
    this.dialogRef.close(this.data);
  }
}
