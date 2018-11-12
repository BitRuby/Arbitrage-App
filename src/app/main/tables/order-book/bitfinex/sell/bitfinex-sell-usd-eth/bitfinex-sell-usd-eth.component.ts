import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, Sort } from '@angular/material';
import { OrderBookBitfinexService } from 'src/app/core/order-book-bitfinex/order-book-bitfinex.service';
import { Asks } from 'src/app/core/order-book-bitfinex/asks.model';

@Component({
  selector: 'app-bitfinex-sell-usd-eth',
  templateUrl: './bitfinex-sell-usd-eth.component.html',
  styleUrls: ['./bitfinex-sell-usd-eth.component.css']
})
export class BitfinexSellUsdEthComponent implements OnInit, AfterViewInit {
  dataSource;
  sortedData: Asks;

  constructor(private orderBookService: OrderBookBitfinexService) {
    this.sortedData = {};
    this.getTransfers();
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  private getTransfers(): void {
    const currency1 = 'ETH';
    const currency2 = 'USD';
    this.orderBookService.getOrderBookBitfinex(currency1, currency2)
      .subscribe(orders => {
        if (!orders) { return; }
        this.dataSource = orders.asks;
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
        case 'amount': return compare(a.amount, b.amount, isAsc);
        case 'price': return compare(a.price, b.price, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
