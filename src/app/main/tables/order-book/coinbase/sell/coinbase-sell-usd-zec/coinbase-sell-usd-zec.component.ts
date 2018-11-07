import { Component, OnInit } from '@angular/core';
import { OrderBookBitstamp } from 'src/app/core/order-book-bitstamp/order-book-bitstamp.model';
import { OrderBookCoinbaseService } from 'src/app/core/order-book-coinbase/order-book-coinbase.service';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-coinbase-sell-usd-zec',
  templateUrl: './coinbase-sell-usd-zec.component.html',
  styleUrls: ['./coinbase-sell-usd-zec.component.css']
})
export class CoinbaseSellUsdZecComponent implements OnInit {
  dataSource;
  sortedData: OrderBookBitstamp['asks'];

  constructor(private orderBookService: OrderBookCoinbaseService) {
    this.getTransfers();
  }
  ngOnInit(): void {

  }

  private getTransfers(): void {

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
