import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Order } from 'src/app/core/order-book/order.model';
import { OrderBookService } from 'src/app/core/order-book/order-book.service';

@Component({
  selector: 'app-order-book-usd-xrp',
  templateUrl: './order-book-usd-xrp.component.html',
  styleUrls: ['./order-book-usd-xrp.component.css']
})
export class OrderBookUsdXrpComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['Price', 'Quantity'];
  dataSource = new Array<MatTableDataSource<Order['Asks']>>();

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  constructor(private ob: OrderBookService) {
  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.loadData();
  }
  loadData(): void {
    const currency1 = 'ETH';
    const currency2 = 'USD';
    this.ob.getOrderBookBittrex(currency1, currency2).subscribe(orders => {
      if (orders === null) { return; }
      this.dataSource[0] = new MatTableDataSource(orders.Asks as []);
      this.dataSource[0].sort = this.sort.toArray()[0];
      this.dataSource[0].paginator = this.paginator.toArray()[0];
    });
    this.ob.getOrderBookBitfinex(currency1, currency2).subscribe(orders => {
      if (orders === null) { return; }
      this.dataSource[1] = new MatTableDataSource(orders.Asks as []);
      this.dataSource[1].sort = this.sort.toArray()[1];
      this.dataSource[1].paginator = this.paginator.toArray()[1];
    });
    this.ob.getOrderBookKraken(currency1, currency2).subscribe(orders => {
      if (orders === null) { return; }
      this.dataSource[2] = new MatTableDataSource(orders.Asks as []);
      this.dataSource[2].sort = this.sort.toArray()[2];
      this.dataSource[2].paginator = this.paginator.toArray()[2];
    });
  }
}
