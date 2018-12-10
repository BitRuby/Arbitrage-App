import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExchangeConnect } from 'src/app/core/modal/exchange-connect.model';

@Component({
  selector: 'app-exchange-connect',
  templateUrl: './exchange-connect.component.html',
  styleUrls: ['./exchange-connect.component.css']
})
export class ExchangeConnectComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ExchangeConnectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ExchangeConnect) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
}
