import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Asks } from 'src/app/core/order-book-bitfinex/asks.model';
import { OrderBookBitfinexService } from 'src/app/core/order-book-bitfinex/order-book-bitfinex.service';
import { OrderStackService } from 'src/app/core/order-stack/order-stack.service';
import { Sort } from '@angular/material';
import { Stack } from 'src/app/core/order-stack/stack.model';


@Component({
  selector: 'app-bitfinex-sell-usd-btc',
  templateUrl: './bitfinex-sell-usd-btc.component.html',
  styleUrls: ['./bitfinex-sell-usd-btc.component.css']
})
export class BitfinexSellUsdBtcComponent implements OnInit, AfterViewInit {
  dataSource;
  sortedData: Asks;
  order: Stack = {};
  selected: Asks;
  constructor(private orderBookService: OrderBookBitfinexService, private orderStackService: OrderStackService) {
    this.sortedData = {};
  }


  ngOnInit() {
    this.getTransfers();
  }

  ngAfterViewInit() {
  }

  private push(element: Asks) {
    this.selected = element;
    this.order.marketId = 1;
    this.order.exchangeId = 1;
    this.order.price = element.price;
    this.order.quantity = element.amount;
    this.orderStackService.pushOrder(this.order);
  }

  private getTransfers(): void {
    const currency1 = 'BTC';
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
