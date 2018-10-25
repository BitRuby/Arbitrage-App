import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { OrderBookService } from 'src/app/core/order-book/order-book.service';

@Component({
  selector: 'app-bittrex-buy-usd-btc',
  templateUrl: './bittrex-buy-usd-btc.component.html',
  styleUrls: ['./bittrex-buy-usd-btc.component.css']
})

export class BittrexBuyUsdBtcComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['Quantity', 'Rate'];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private orderBookService: OrderBookService) {
    this.getTransfers();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  private getTransfers(): void {
    const currency1 = 'USD';
    const currency2 = 'BTC';
    this.orderBookService.getOrderBookBittrex(currency1, currency2)
      .subscribe(orders => {
        if (!orders) { return; }
        this.dataSource = new MatTableDataSource(orders.result.buy as {}[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

}
