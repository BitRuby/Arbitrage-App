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

  getExchangeDetails(exchangeId: number): Observable<ExchangeName> {
    const url = `http://localhost:8000/api/exchange/${exchangeId}`;
    return this.httpClient.get<ExchangeName>(url);
  }

}
