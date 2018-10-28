import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { OrderBookBitfinexService } from 'src/app/core/order-book-bitfinex/order-book-bitfinex.service';

@Component({
  selector: 'app-bitfinex-buy-usd-xrp',
  templateUrl: './bitfinex-buy-usd-xrp.component.html',
  styleUrls: ['./bitfinex-buy-usd-xrp.component.css']
})
export class BitfinexBuyUsdXrpComponent implements OnInit, AfterViewInit {
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
    const currency1 = 'XRP';
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
