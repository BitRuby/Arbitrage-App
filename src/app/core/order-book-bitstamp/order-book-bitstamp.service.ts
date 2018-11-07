import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderBookBitstamp } from './order-book-bitstamp.model';



@Injectable({
    providedIn: 'root',
  })
export class OrderBookBitstampService {
    constructor(private httpClient: HttpClient) {

    }
    getOrderBookBitstamp(currency1: string, currency2: string): Observable<OrderBookBitstamp> {
        const url = `/api/bitstamp/order_book/${currency1}${currency2}`;
        return this.httpClient.get<OrderBookBitstamp>(url);
    }
}
