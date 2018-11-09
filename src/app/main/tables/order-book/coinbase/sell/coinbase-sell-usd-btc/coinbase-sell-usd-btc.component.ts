import { Component, OnInit } from '@angular/core';
import { OrderBookCoinbaseService } from 'src/app/core/order-book-coinbase/order-book-coinbase.service';
import { Sort } from '@angular/material';
import { OrderBookCoinbase } from 'src/app/core/order-book-coinbase/order-book-coinbase.model';

@Component({
  selector: 'app-coinbase-sell-usd-btc',
  templateUrl: './coinbase-sell-usd-btc.component.html',
  styleUrls: ['./coinbase-sell-usd-btc.component.css']
})
export class CoinbaseSellUsdBtcComponent implements OnInit {
  dataSource;
  sortedData: OrderBookCoinbase['asks'];

  constructor(private orderBookService: OrderBookCoinbaseService) {
    this.sortedData = [];
    this.getTransfers();
  }
  ngOnInit(): void {

  }

  private getTransfers(): void {
    const currency1 = 'BTC';
    const currency2 = 'USD';
    this.orderBookService.getOrderBookCoinbase(currency1, currency2)
      .subscribe(orders => {
        if (orders.message) {  return;  }
        this.dataSource = orders.asks;
         for (let i = 0; i < this.dataSource.length; i++) {
           for (let  j = 0; j < 2; j++) {
             this.dataSource[i][j] = parseFloat(this.dataSource[i][j]);
           }
        }
        this.sortedData = this.dataSource.slice();
      });
  }
  sortData(sort: Sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'rate': return compare(a[0], b[0], isAsc);
        case 'quantity': return compare(a[1], b[1], isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
