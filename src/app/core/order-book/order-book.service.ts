import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { OrderBookData } from './order-book-data.model';

@Injectable({
  providedIn: 'root'
})
export class OrderBookService {

  constructor(private httpClient: HttpClient) {
  }
  getOrderBook(id: Number): Observable<OrderBookData[]> {
    const url = `http://localhost:8000/api/orderbook/${id}`;
    return this.httpClient.get<OrderBookData[]>(url);
  }
}
