import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBalance } from './user-balance.model';
import { UserOrder } from './user-order.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUserBalances(id: number): Observable<UserBalance[]> {
    const url = `http://localhost:8000/api/user/balances/${id}`;
    return this.httpClient.get<UserBalance[]>(url);
  }

  getUserOrders(id: number): Observable<UserOrder[]> {
    const url = `http://localhost:8000/api/user/orders/${id}`;
    return this.httpClient.get<UserOrder[]>(url);
  }
}
