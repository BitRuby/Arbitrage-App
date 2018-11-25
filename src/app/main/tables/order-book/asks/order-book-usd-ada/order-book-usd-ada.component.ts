import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { OrderData } from 'src/app/core/order-book/order-data.model';
import { OrderBookService } from 'src/app/core/order-book/order-book.service';
import { OrderStackService } from 'src/app/core/order-stack/order-stack.service';
import { Stack } from 'src/app/core/order-stack/stack.model';

@Component({
  selector: 'app-order-book-usd-ada',
  templateUrl: './order-book-usd-ada.component.html',
  styleUrls: ['./order-book-usd-ada.component.css']
})
export class OrderBookUsdAdaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['Price', 'Quantity'];
  dataSource = new Array<MatTableDataSource<OrderData>>();
  selected = new Array<OrderData>();

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  constructor(private ob: OrderBookService, private os: OrderStackService) {
  }

  private push(element: OrderData, marketId: number) {
    const order: Stack = {};
    this.selected[marketId] = element;
    order.marketId = marketId;
    order.exchangeId = 17;
    order.price = element.Price;
    order.quantity = element.Quantity;
    this.os.pushOrder(order);
  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.loadData();
  }
  loadData(): void {
    const currency1 = 'ADA';
    const currency2 = 'USD';
    this.ob.getOrderBookBittrex(currency1, currency2).subscribe(orders => {
      if (orders === null) { return; }
      this.dataSource[0] = new MatTableDataSource(orders.Asks);
      this.dataSource[0].sort = this.sort.toArray()[0];
      this.dataSource[0].paginator = this.paginator.toArray()[0];
    });
    this.ob.getOrderBookKraken(currency1, currency2).subscribe(orders => {
      if (orders === null) { return; }
      this.dataSource[1] = new MatTableDataSource(orders.Asks);
      this.dataSource[1].sort = this.sort.toArray()[1];
      this.dataSource[1].paginator = this.paginator.toArray()[1];
    });
  }

}

