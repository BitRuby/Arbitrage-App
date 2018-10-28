import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { OrderBookBitfinexService } from 'src/app/core/order-book-bitfinex/order-book-bitfinex.service';

@Component({
  selector: 'app-bitfinex-buy-usd-zec',
  templateUrl: './bitfinex-buy-usd-zec.component.html',
  styleUrls: ['./bitfinex-buy-usd-zec.component.css']
})
export class BitfinexBuyUsdZecComponent implements OnInit, AfterViewInit {
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
    const currency1 = 'ZEC';
    const currency2 = 'USD';
    this.orderBookService.getOrderBookBitfinex(currency1, currency2)
      .subscribe(orders => {
        if (!orders) { return; }
        this.dataSource = new MatTableDataSource(orders.asks as {}[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

}
