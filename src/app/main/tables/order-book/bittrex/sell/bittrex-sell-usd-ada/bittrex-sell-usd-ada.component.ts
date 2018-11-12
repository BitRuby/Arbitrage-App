import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OrderBookBittrexService } from 'src/app/core/order-book-bittrex/order-book-bittrex.service';
import { BuyAndSell } from 'src/app/core/order-book-bittrex/buy-and-sell.model';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-bittrex-sell-usd-ada',
  templateUrl: './bittrex-sell-usd-ada.component.html',
  styleUrls: ['./bittrex-sell-usd-ada.component.css']
})

export class BittrexSellUsdAdaComponent implements OnInit, AfterViewInit {
  dataSource;
  sortedData: BuyAndSell['sell'];

  constructor(private orderBookService: OrderBookBittrexService) {
    this.sortedData = {};
    this.getTransfers();
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  private getTransfers(): void {
    const currency1 = 'USD';
    const currency2 = 'ADA';
    this.orderBookService.getOrderBookBittrex(currency1, currency2)
      .subscribe(orders => {
        if (!orders) { return; }
        this.dataSource = orders.result.sell;
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
        case 'Quantity': return compare(a.Quantity, b.Quantity, isAsc);
        case 'Rate': return compare(a.Rate, b.Rate, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
