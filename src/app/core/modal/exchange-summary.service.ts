import { EventEmitter, Injectable, Output } from '@angular/core';
import { ExchangeSummary } from './exchange-summary.model';
import { ExchangeSummaryComponent } from 'src/app/main/modals/exchange-summary/exchange-summary.component';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeSummaryService {

    exchangeSummary: ExchangeSummary;

    @Output() updateExchangeService: EventEmitter<ExchangeSummary> = new EventEmitter();
    changeExchangeSummary(exchangeName: string, exchangeCurrency1: string, exchangeCurrency2) {
        this.getExchangeSummary(exchangeName, exchangeCurrency1, exchangeCurrency2).subscribe(ret => {
          this.exchangeSummary = ret;
          this.updateExchangeService.emit(this.exchangeSummary);
        });
    }

    constructor(public dialog: MatDialog, private httpClient: HttpClient) {
      this.exchangeSummary = {} as ExchangeSummary;
      this.openDialogExchangeSummary();
    }

    openDialogExchangeSummary(): void {
      this.updateExchangeService.subscribe(retValue => {
        const dialogRef = this.dialog.open(ExchangeSummaryComponent, {
          width: '350px',
          data: {
            exchangeName: retValue.exchangeName,
            exchangeCurrency1: retValue.exchangeCurrency1,
            exchangeCurrency2: retValue.exchangeCurrency2,
            lastPrice: retValue.lastPrice,
            bid: retValue.bid,
            ask: retValue.ask,
            volume: retValue.volume,
            lowPrice: retValue.lowPrice,
            highPrice: retValue.highPrice,
            percentageChange: retValue.percentageChange
          }
          });
        dialogRef.afterClosed().subscribe(_result => {
        });
      });
    }

    getExchangeSummary(exchangeName: string, c1: string, c2: string): Observable<ExchangeSummary> {
      const url = `http://localhost:8000/api/${exchangeName}/summary/${c1}/${c2}`;
      return this.httpClient.get<ExchangeSummary>(url);
    }



}
