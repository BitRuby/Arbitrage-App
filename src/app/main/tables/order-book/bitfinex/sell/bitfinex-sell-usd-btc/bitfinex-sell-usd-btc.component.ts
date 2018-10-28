import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { OrderBookBitfinexService } from 'src/app/core/order-book-bitfinex/order-book-bitfinex.service';

@Component({
  selector: 'app-bitfinex-sell-usd-btc',
  templateUrl: './bitfinex-sell-usd-btc.component.html',
  styleUrls: ['./bitfinex-sell-usd-btc.component.css']
})
export class BitfinexSellUsdBtcComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['amount', 'price'];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private orderBookService: OrderBookBitfinexService) {
    this.getTransfers();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  private getTransfers(): void {
    const currency1 = 'BTC';
    const currency2 = 'USD';
    this.orderBookService.getOrderBookBitfinex(currency1, currency2)
      .subscribe(orders => {
        if (!orders) { return; }
        this.dataSource = new MatTableDataSource(orders.bids as {}[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

}

