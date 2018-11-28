import { ExchangeFee } from './exchange-fee.model';
import { ExchangeName } from './exchange-name.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private httpClient: HttpClient) { }

  getExchangeName(exchangeId: number): Observable<ExchangeName> {
    const url = `http://localhost:8000/api/exchange/name/${exchangeId}`;
    return this.httpClient.get<ExchangeName>(url);
  }
  getExchangeFees(exchangeId: number): Observable<ExchangeFee> {
    const url = `http://localhost:8000/api/exchange/fee/${exchangeId}`;
    return this.httpClient.get<ExchangeFee>(url);
  }

}
