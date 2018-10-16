import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderBook } from './order-book.model';


@Injectable({
    providedIn: 'root',
  })
export class OrderBookService {
    constructor(private httpClient: HttpClient) {

    }
    getOrderBookBittrex(currency1: string, currency2: string): Observable<OrderBook> {
        const url = `/api/getorderbook?market=${currency1}-${currency2}&type=both`;
        return this.httpClient.get<OrderBook>(url);
    }
}
