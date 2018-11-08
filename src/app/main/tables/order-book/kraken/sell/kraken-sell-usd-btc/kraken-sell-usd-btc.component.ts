import { Component, OnInit } from '@angular/core';
import { OrderBookKrakenService } from 'src/app/core/order-book-kraken/order-book-kraken.service';
import { AsksAndBids } from 'src/app/core/order-book-kraken/asks-and-bids.model';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-kraken-sell-usd-btc',
  templateUrl: './kraken-sell-usd-btc.component.html',
  styleUrls: ['./kraken-sell-usd-btc.component.css']
})
export class KrakenSellUsdBtcComponent implements OnInit {

  dataSource;
  sortedData: AsksAndBids['asks'];

  constructor(private orderBookService: OrderBookKrakenService) {
    this.getTransfers();
  }
  ngOnInit(): void {

  }

  private getTransfers(): void {
    const currency1 = 'BTC';
    const currency2 = 'USD';
    this.orderBookService.getOrderBookKraken(currency1, currency2)
      .subscribe(orders => {
        if (orders.error.length > 0) {  return;  }
        console.log(orders.error.length);
        this.dataSource = orders.result.BTCUSD['asks'];
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
        case 'timestamp': return compare(a[2], b[2], isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}