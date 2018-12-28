import { Component, OnInit } from '@angular/core';
import { ExchangeArray } from 'src/app/core/exchange-list/exchange-array.model';
import { ExchangeConnectService } from 'src/app/core/modal/exchange-connect.service';
import { ExchangeListService } from 'src/app/core/exchange-list/exchange-list.service';


@Component({
  selector: 'app-menu-settings-exchanges',
  templateUrl: './menu-settings-exchanges.component.html',
  styleUrls: ['./menu-settings-exchanges.component.css']
})
export class MenuSettingsExchangesComponent implements OnInit {

  exchangeList: ExchangeArray[];

  constructor(private ms: ExchangeConnectService, private es: ExchangeListService) { }

  ngOnInit() {
    this.getExchanges();
  }

  private getExchanges(): void {
    this.es.getExchangeList().subscribe(val => {
      this.exchangeList = val.Exchanges;
    });
  }

  private openModal(exchangeName: string): void {
    this.ms.changeExchangeConnect(exchangeName);
  }

}
