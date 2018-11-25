import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderBookService {

  constructor(private httpClient: HttpClient) {
  }
  getOrderBookBittrex(c1: string, c2: string): Observable<Order> {
    const url = `http://localhost:8000/api/bittrex/orderbook/${c1}/${c2}`;
    return this.httpClient.get<Order>(url);
  }
  getOrderBookBitfinex(c1: string, c2: string): Observable<Order> {
    const url = `http://localhost:8000/api/bitfinex/orderbook/${c1}/${c2}`;
    return this.httpClient.get<Order>(url);
  }
  getOrderBookCoinbase(c1: string, c2: string): Observable<Order> {
    const url = `http://localhost:8000/api/coinbase/orderbook/${c1}/${c2}`;
    return this.httpClient.get<Order>(url);
  }
  getOrderBookKraken(c1: string, c2: string): Observable<Order> {
    const url = `http://localhost:8000/api/kraken/orderbook/${c1}/${c2}`;
    return this.httpClient.get<Order>(url);
  }
}
