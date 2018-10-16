import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { OrderBook } from '../core/order-book/order-book.model';
import { OrderBookService } from '../core/order-book/order-book.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['Quantity', 'Rate'];
  dataSource;
  dataSource2;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort) sort2: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) paginator2: MatPaginator;

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
        this.dataSource2 = new MatTableDataSource(orders.result.sell as {}[]);
        this.dataSource2.sort = this.sort2;
        this.dataSource2.paginator = this.paginator2;
      });
  }

}
