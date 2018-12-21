import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketList } from './market-list.model';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class MarketListService {
    constructor(private httpClient: HttpClient) { }

    getMarketList(): Observable<MarketList> {
        const url = `http://localhost:8000/api/markets`;
        return this.httpClient.get<MarketList>(url);
      }
}

