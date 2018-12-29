import { ExchangeName } from './exchange-name.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderStackService } from '../order-stack/order-stack.service';


@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private httpClient: HttpClient, private os: OrderStackService) { }

  getExchangeDetails(exchangeId: number): Observable<ExchangeName> {
    if ( exchangeId > (this.os.exchangesSize / 2) ) {
      exchangeId = exchangeId - (this.os.exchangesSize / 2);
    }
    const url = `http://localhost:8000/api/exchange/${exchangeId}`;
    return this.httpClient.get<ExchangeName>(url);
  }

}
