import { EventEmitter, Injectable, Output } from '@angular/core';
import { ExchangeConnect } from './exchange-connect.model';
import { ExchangeConnectComponent } from 'src/app/main/modals/exchange-connect/exchange-connect.component';
import { ExchangeSummary } from './exchange-summary.model';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExchangeConnectService {

    exchangeConnect: ExchangeConnect;

    @Output() updateExchangeService: EventEmitter<ExchangeConnect> = new EventEmitter();
    changeExchangeConnect(exchangeName: string) {
        this.exchangeConnect.exchangeName = exchangeName;
        this.updateExchangeService.emit(this.exchangeConnect);
    }

    constructor(public dialog: MatDialog, private httpClient: HttpClient) {
      this.exchangeConnect = {} as ExchangeConnect;
      this.openDialogExchangeConnect();
    }

    openDialogExchangeConnect(): void {

      this.updateExchangeService.subscribe(retValue => {
        const dialogRef = this.dialog.open(ExchangeConnectComponent, {
          width: '350px',
          data: {
            exchangeName: retValue.exchangeName,
          }
          });
        dialogRef.afterClosed().subscribe(_result => {
        });
      });
    }

    getExchangeConnect(): Observable<ExchangeSummary> {
      return this.httpClient.get<ExchangeSummary>(null);
    }



}
