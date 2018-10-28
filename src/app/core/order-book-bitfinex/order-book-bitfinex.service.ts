import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderBookBitfinex } from './order-book-bitfinex.model';


@Injectable({
    providedIn: 'root',
  })
export class OrderBookBitfinexService {
    constructor(private httpClient: HttpClient) {

    }
    getOrderBookBitfinex(currency1: string, currency2: string): Observable<OrderBookBitfinex> {
        const url = `/api/bitfinex/book/${currency1}${currency2}?limit_bids=150&limit_asks=150`;
        return this.httpClient.get<OrderBookBitfinex>(url);
    }
}
