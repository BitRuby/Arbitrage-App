import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderBookCoinbase } from './order-book-coinbase.model';




@Injectable({
    providedIn: 'root',
  })
export class OrderBookCoinbaseService {
    constructor(private httpClient: HttpClient) {

    }
    getOrderBookCoinbase(currency1: string, currency2: string): Observable<OrderBookCoinbase> {
        const url = `/api/coinbase/products/${currency1}-${currency2}/book?level=2`;
        return this.httpClient.get<OrderBookCoinbase>(url);
    }
}
