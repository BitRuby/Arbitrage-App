import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChildren,
  QueryList
} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { OrderData } from 'src/app/core/order-book/order-data.model';
import { OrderBookService } from 'src/app/core/order-book/order-book.service';
import { OrderStackService } from 'src/app/core/order-stack/order-stack.service';
import { ExchangeService } from 'src/app/core/exchange/exchange.service';
import { TableNumRowsService } from 'src/app/core/table-num-rows/table-num-rows.service';
import { ExchangeSummaryService } from 'src/app/core/modal/exchange-summary.service';
import { Stack } from 'src/app/core/order-stack/stack.model';

@Component({
  selector: 'app-book-usdt-nano',
  templateUrl: './book-usdt-nano.component.html',
  styleUrls: ['./book-usdt-nano.component.css']
})
export class BookUsdtNanoComponent implements OnInit, AfterViewInit {
  marketId = 9;
  displayedColumns: string[] = ['Price', 'Quantity'];
  dataSource = new Array<MatTableDataSource<OrderData>>();
  nameSource = new Array<String>();
  selected = new Map<Number, OrderData>();
  exchangesSize: number;
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  constructor(
    private ob: OrderBookService,
    private os: OrderStackService,
    private ex: ExchangeService,
    private tnr: TableNumRowsService,
    private ms: ExchangeSummaryService
  ) {}

  ngOnInit() {
    this.associateSelectedOrders();
    this.changePageSize();
    this.loadData();
    this.exchangesSize = this.os.exchangesSize;
  }
  ngAfterViewInit(): void {}

  private openModal(
    exchangeName: string,
    currency1: string,
    currency2: string
  ): void {
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
    const calculatedId = (this.marketId - 1) * this.exchangesSize + exchangeId;
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
      this.os.pushOrder(order);
      this.os.saveSelected(order, element);
    });
  }

  loadData(): void {
    this.ob.getOrderBook(this.marketId).subscribe(ret => {
      if (ret === null) {
        return;
      }
      for (let i = 0; i < 2; i++) {
        this.nameSource[i] = ret[i].name;
        this.dataSource[i] = new MatTableDataSource(ret[i].data.Asks);
        this.dataSource[i].sort = this.sort.toArray()[i];
        this.dataSource[i].paginator = this.paginator.toArray()[i];
        this.dataSource[i + 2] = new MatTableDataSource(ret[i].data.Bids);
        this.dataSource[i + 2].sort = this.sort.toArray()[i + 2];
        this.dataSource[i + 2].paginator = this.paginator.toArray()[i + 2];
      }
    });
  }
}
