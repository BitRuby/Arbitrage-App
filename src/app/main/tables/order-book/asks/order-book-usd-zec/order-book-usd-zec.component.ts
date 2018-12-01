import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { OrderData } from 'src/app/core/order-book/order-data.model';
import { OrderBookService } from 'src/app/core/order-book/order-book.service';
import { OrderStackService } from 'src/app/core/order-stack/order-stack.service';
import { Stack } from 'src/app/core/order-stack/stack.model';
import { ExchangeService } from 'src/app/core/exchange/exchange.service';
import { TableNumRowsService } from 'src/app/main/table-num-rows/table-num-rows.service';


@Component({
  selector: 'app-order-book-usd-zec',
  templateUrl: './order-book-usd-zec.component.html',
  styleUrls: ['./order-book-usd-zec.component.css']
})
export class OrderBookUsdZecComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['Price', 'Quantity'];
  dataSource = new Array<MatTableDataSource<OrderData>>();
  selected = new Map<Number, OrderData>();
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  constructor(private ob: OrderBookService, private os: OrderStackService, private ex: ExchangeService, private tnr: TableNumRowsService) {
    this.associateSelectedOrders();
  }

  private changePageSize(): void {
    this.tnr.update.subscribe(val => {
      this.dataSource[0].paginator._changePageSize(val);
      this.dataSource[1].paginator._changePageSize(val);
      this.dataSource[2].paginator._changePageSize(val);
    });
  }

  private associateSelectedOrders() {
    this.selected = this.os.selectedOrders;
  }

  private push(element: OrderData, marketId: number) {
    if (this.os.isSelected(marketId * 21)) {  this.os.popOrder(marketId * 21); return; }
    const order: Stack = {};
    order.exchangeId = 21;
    order.marketId = marketId;
    order.price = element.Price;
    order.quantity = element.Quantity;
    this.ex.getExchangeName(marketId).subscribe(returnedName => {
      if (returnedName === null) { return; }
      order.exchangeName = returnedName.name;
    });
    this.ex.getExchangeFees(marketId).subscribe(returnedFees => {
      if (returnedFees === null) { return; }
      order.exchangeFees = returnedFees.sellFee;
    });
    this.os.pushOrder(order);
    this.os.saveSelected(order, element);
  }
  ngOnInit() {
    this.changePageSize();
  }
  ngAfterViewInit(): void {
    this.loadData();
  }
  loadData(): void {
    const currency1 = 'ZEC';
    const currency2 = 'USD';
    this.ob.getOrderBookBittrex(currency1, currency2).subscribe(orders => {
      if (orders === null) { return; }
      this.dataSource[0] = new MatTableDataSource(orders.Asks);
      this.dataSource[0].sort = this.sort.toArray()[0];
      this.dataSource[0].paginator = this.paginator.toArray()[0];
    });
    this.ob.getOrderBookBitfinex(currency1, currency2).subscribe(orders => {
      if (orders === null) { return; }
      this.dataSource[1] = new MatTableDataSource(orders.Asks);
      this.dataSource[1].sort = this.sort.toArray()[1];
      this.dataSource[1].paginator = this.paginator.toArray()[1];
    });
    this.ob.getOrderBookKraken(currency1, currency2).subscribe(orders => {
      if (orders === null) { return; }
      this.dataSource[2] = new MatTableDataSource(orders.Asks);
      this.dataSource[2].sort = this.sort.toArray()[2];
      this.dataSource[2].paginator = this.paginator.toArray()[2];
    });
  }

}
