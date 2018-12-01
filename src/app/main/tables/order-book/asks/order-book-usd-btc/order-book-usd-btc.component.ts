import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren
  } from '@angular/core';
import { ExchangeService } from 'src/app/core/exchange/exchange.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { OrderBookService } from 'src/app/core/order-book/order-book.service';
import { OrderData } from 'src/app/core/order-book/order-data.model';
import { OrderStackService } from 'src/app/core/order-stack/order-stack.service';
import { Stack } from 'src/app/core/order-stack/stack.model';
import { TableNumRowsService } from 'src/app/main/table-num-rows/table-num-rows.service';


@Component({
  selector: 'app-order-book-usd-btc',
  templateUrl: './order-book-usd-btc.component.html',
  styleUrls: ['./order-book-usd-btc.component.css']
})
export class OrderBookUsdBtcComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['Price', 'Quantity'];
  dataSource = new Array<MatTableDataSource<OrderData>>();
  selected = new Map<Number, OrderData>();
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  constructor(private ob: OrderBookService, private os: OrderStackService, private ex: ExchangeService, private tnr: TableNumRowsService) {
  }

  ngOnInit() {
    this.associateSelectedOrders();
    this.changePageSize();
  }
  ngAfterViewInit(): void {
    this.loadData();
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
    if (this.os.isSelected(marketId * 1)) {  this.os.popOrder(marketId * 1); return; }
    const order: Stack = {};
    order.exchangeId = 1;
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

  loadData(): void {
    const currency1 = 'BTC';
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
    this.ob.getOrderBookCoinbase(currency1, currency2).subscribe(orders => {
      if (orders === null) { return; }
      this.dataSource[2] = new MatTableDataSource(orders.Asks);
      this.dataSource[2].sort = this.sort.toArray()[2];
      this.dataSource[2].paginator = this.paginator.toArray()[2];
    });
  }

}

