import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitfinex-sell-usd-ada',
  templateUrl: './bitfinex-sell-usd-ada.component.html',
  styleUrls: ['./bitfinex-sell-usd-ada.component.css']
})
export class BitfinexSellUsdAdaComponent implements OnInit {
  sortedData;
  constructor() {
    this.sortedData = [];
  }

  ngOnInit() {
  }

}
