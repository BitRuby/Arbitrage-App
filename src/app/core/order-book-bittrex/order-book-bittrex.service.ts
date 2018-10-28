import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderBookBittrex } from './order-book-bittrex.model';


@Injectable({
    providedIn: 'root',
  })
export class OrderBookBittrexService {
    constructor(private httpClient: HttpClient) {

    }
    getOrderBookBittrex(currency1: string, currency2: string): Observable<OrderBookBittrex> {
        const url = `/api/bittrex/getorderbook?market=${currency1}-${currency2}&type=both`;
        return this.httpClient.get<OrderBookBittrex>(url);
    }
}
