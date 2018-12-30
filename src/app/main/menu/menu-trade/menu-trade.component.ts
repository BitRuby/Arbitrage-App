import {
  Component,
  OnInit
  } from '@angular/core';
import { ExchangeService } from 'src/app/core/exchange/exchange.service';
import { OrderStackService } from 'src/app/core/order-stack/order-stack.service';
import { Stack } from 'src/app/core/order-stack/stack.model';
import { MarketListService } from 'src/app/core/market-list/market-list.service';
import { MarketArray } from 'src/app/core/market-list/market-array.model';



@Component({
  selector: 'app-menu-trade',
  templateUrl: './menu-trade.component.html',
  styleUrls: ['./menu-trade.component.css']
})
export class MenuTradeComponent implements OnInit {
  panelOpenState: Boolean = false;
  allExpandState = true;
  marketList: MarketArray[];
  orderList = new Map<Number, Stack>();
  constructor(private os: OrderStackService, private es: ExchangeService, private ms: MarketListService) { }

  ngOnInit() {
    this.getMarkets();
    this.getAllOrders();
  }

  getMarkets(): void {
    this.ms.getMarketList().subscribe(ret => {
        this.marketList = ret.Markets;
    });
  }

  getAllOrders(): void {
    this.os.updateOrderStack.subscribe(val => {
      this.orderList = val;
    });
  }

  getOrders(marketId: number): Array<Stack> {
    const array = new Array<Stack>();
    const loadToArray = function(value, key, map) {
      if (value.marketId === marketId) { array.push(value); }
    };
    this.orderList.forEach(loadToArray);
    return array;
  }

  deleteOrder(marketId: number, exchangeId: number) {
    this.os.popOrder(marketId, exchangeId);
  }



}
