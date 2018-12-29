import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren
  } from '@angular/core';
import { ExchangeService } from 'src/app/core/exchange/exchange.service';
import { ExchangeSummaryService } from 'src/app/core/modal/exchange-summary.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { OrderBookService } from 'src/app/core/order-book/order-book.service';
import { OrderData } from 'src/app/core/order-book/order-data.model';
import { OrderStackService } from 'src/app/core/order-stack/order-stack.service';
import { Stack } from 'src/app/core/order-stack/stack.model';
import { TableNumRowsService } from 'src/app/core/table-num-rows/table-num-rows.service';

@Component({
  selector: 'app-book-usdt-bch',
  templateUrl: './book-usdt-bch.component.html',
  styleUrls: ['./book-usdt-bch.component.css']
})
export class BookUsdtBchComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['Price', 'Quantity'];
  dataSource = new Array<MatTableDataSource<OrderData>>();
  nameSource = new Array<String>();
  selected = new Map<Number, OrderData>();
  marketId = 7;
  exchangesSize: number;
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  constructor(private ob: OrderBookService, private os: OrderStackService, private ex: ExchangeService, private tnr: TableNumRowsService,
    private ms: ExchangeSummaryService) {
  }

  ngOnInit() {
    this.associateSelectedOrders();
    this.changePageSize();
    this.exchangesSize = this.os.exchangesSize;
  }
  ngAfterViewInit(): void {
    this.loadData();
  }

  private openModal(exchangeName: string, currency1: string, currency2: string): void {
    this.ms.changeExchangeSummary(exchangeName, currency1, currency2);
  }

  private changePageSize(): void {
    this.tnr.update.subscribe(val => {
      this.dataSource[0].paginator._changePageSize(val);
      this.dataSource[1].paginator._changePageSize(val);
      this.dataSource[2].paginator._changePageSize(val);
      this.dataSource[3].paginator._changePageSize(val);
    });
  }

  private associateSelectedOrders() {
    this.selected = this.os.selectedOrders;
  }

  private push(element: OrderData, exchangeId: number, type: string) {
    const calculatedId = ((this.marketId - 1) * this.exchangesSize + exchangeId);
    if (this.os.isSelected(calculatedId)) {
      this.os.popOrder(this.marketId, exchangeId);
      return;
    }
    const order: Stack = {};
    order.exchangeId = exchangeId;
    order.marketId = this.marketId;
    order.price = element.Price;
    order.quantity = element.Quantity;
    order.type = type;
    this.ex.getExchangeDetails(exchangeId).subscribe(ret => {
      order.exchangeName = ret.name;
      order.exchangeFees = ret.sellFee;
    });
    this.os.pushOrder(order);
    this.os.saveSelected(order, element);
  }

  loadData(): void {
    this.ob.getOrderBook(this.marketId).subscribe(ret => {
      if (ret === null) { return; }
        for (let i = 0; i < ret.length; i++) {
          this.nameSource[i] = ret[i].name;
          this.dataSource[i] = new MatTableDataSource(ret[i].data.Asks);
          this.dataSource[i].sort = this.sort.toArray()[i];
          this.dataSource[i].paginator = this.paginator.toArray()[i];
          this.dataSource[i + ret.length] = new MatTableDataSource(ret[i].data.Bids);
          this.dataSource[i + ret.length].sort = this.sort.toArray()[i + ret.length];
          this.dataSource[i + ret.length].paginator = this.paginator.toArray()[i + ret.length];
        }
    });
  }
}