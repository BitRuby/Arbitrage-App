import {
  Component,
  OnInit
  } from '@angular/core';
import { ExchangeService } from 'src/app/core/exchange/exchange.service';
import { OrderStackService } from 'src/app/core/order-stack/order-stack.service';
import { Stack } from 'src/app/core/order-stack/stack.model';



@Component({
  selector: 'app-menu-trade',
  templateUrl: './menu-trade.component.html',
  styleUrls: ['./menu-trade.component.css']
})
export class MenuTradeComponent implements OnInit {
  panelOpenState: Boolean = false;
  _allExpandState = false;
  constructor(private os: OrderStackService, private es: ExchangeService) { }

  ngOnInit() {
  }

  getOrders(marketId: number): Array<Stack> {
    return this.os.getOrders(marketId);
  }

  deleteOrder(orderId: number) {
    this.os.popOrder(orderId);
  }



}
