import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExchangeConnect } from 'src/app/core/modal/exchange-connect.model';
import { ExchangeConnectForm } from 'src/app/core/modal/exchange-connect-form.model';

@Component({
  selector: 'app-exchange-connect',
  templateUrl: './exchange-connect.component.html',
  styleUrls: ['./exchange-connect.component.css']
})
export class ExchangeConnectComponent implements OnInit {
  @Input() form: ExchangeConnectForm;
  constructor(
    public dialogRef: MatDialogRef<ExchangeConnectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ExchangeConnect) {
      this.form = {} as ExchangeConnectForm;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onConnect(): void {
    console.log(this.form);
  }
  ngOnInit() {
  }
}
