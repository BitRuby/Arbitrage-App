import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderBookKraken } from './order-book-kraken.model';



@Injectable({
    providedIn: 'root',
  })
export class OrderBookKrakenService {
    constructor(private httpClient: HttpClient) {

    }
    getOrderBookKraken(currency1: string, currency2: string): Observable<OrderBookKraken> {
        const url = `/api/kraken/0/public/Depth?pair=${currency1}${currency2}&count=150`;
        return this.httpClient.get<OrderBookKraken>(url);
    }
}
