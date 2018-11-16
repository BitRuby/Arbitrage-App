import { Component, OnInit } from '@angular/core';
export interface Crypto {
  price: Number;
  quantity: Number;
}

@Component({
  selector: 'app-bitfinex-sell',
  templateUrl: './bitfinex-sell.component.html',
  styleUrls: ['./bitfinex-sell.component.css']
})
export class BitfinexSellComponent implements OnInit {

  obj1: Crypto[] = [
    {price: 1.00, quantity: 0.2},
    {price: 1.01, quantity: 1.3}
  ];
  obj2: Crypto[] = [
    {price: 0.99, quantity: 0.01},
    {price: 0.99, quantity: 5.68}
  ];
  data;
  private getObject(name: string): any {
    switch (name) {
      case 'obj1': return this.obj1;
      break;
      case 'obj2': return this.obj2;
    }
  }
  constructor() {
    this.data = [];
    const cryptoList = ['obj1', 'obj2'];
    for (let i = 0; i < cryptoList.length; i++) {
      this.data[i] = this.getObject(cryptoList[i]);
    }
  }

  ngOnInit() {
  }

}
