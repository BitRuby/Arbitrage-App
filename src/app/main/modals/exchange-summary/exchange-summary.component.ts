import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExchangeSummary } from 'src/app/core/modal/exchange-summary.model';


@Component({
  selector: 'app-exchange-summary',
  templateUrl: './exchange-summary.component.html',
  styleUrls: ['./exchange-summary.component.css']
})
export class ExchangeSummaryComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ExchangeSummaryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ExchangeSummary) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
