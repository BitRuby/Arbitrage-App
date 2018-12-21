import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExchangeList } from './exchange-list.model';


@Injectable({
    providedIn: 'root'
})
export class ExchangeListService {
    constructor(private httpClient: HttpClient) { }

    getExchangeList(): Observable<ExchangeList> {
        const url = `http://localhost:8000/api/exchanges`;
        return this.httpClient.get<ExchangeList>(url);
      }
}
