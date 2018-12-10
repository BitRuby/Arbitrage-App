import { Component, OnInit } from '@angular/core';
import { ExchangeConnectService } from 'src/app/core/modal/exchange-connect.service';


@Component({
  selector: 'app-menu-settings-exchanges',
  templateUrl: './menu-settings-exchanges.component.html',
  styleUrls: ['./menu-settings-exchanges.component.css']
})
export class MenuSettingsExchangesComponent implements OnInit {

  constructor(private modalService: ExchangeConnectService) { }

  ngOnInit() {
  }

  private openModal(exchangeName: string): void {
    this.modalService.changeExchangeConnect(exchangeName);
  }

}
