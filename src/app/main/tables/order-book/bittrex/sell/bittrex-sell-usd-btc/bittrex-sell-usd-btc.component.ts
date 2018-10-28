import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { OrderBookBittrexService } from 'src/app/core/order-book-bittrex/order-book-bittrex.service';

@Component({
  selector: 'app-bittrex-sell-usd-btc',
  templateUrl: './bittrex-sell-usd-btc.component.html',
  styleUrls: ['./bittrex-sell-usd-btc.component.css']
})

export class BittrexSellUsdBtcComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['Quantity', 'Rate'];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private orderBookService: OrderBookBittrexService) {
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
        this.dataSource = new MatTableDataSource(orders.result.sell as {}[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

}
