import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { OrderBookBittrexService } from 'src/app/core/order-book-bittrex/order-book-bittrex.service';

@Component({
  selector: 'app-bittrex-buy-usd-xrp',
  templateUrl: './bittrex-buy-usd-xrp.component.html',
  styleUrls: ['./bittrex-buy-usd-xrp.component.css']
})
export class BittrexBuyUsdXrpComponent implements OnInit, AfterViewInit {
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
    const currency2 = 'XRP';
    this.orderBookService.getOrderBookBittrex(currency1, currency2)
      .subscribe(orders => {
        if (!orders) { return; }
        this.dataSource = new MatTableDataSource(orders.result.buy as {}[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

}
