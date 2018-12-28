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
  constructor(private os: OrderStackService, private es: ExchangeService, private ms: MarketListService) { }

  ngOnInit() {
    this.getMarkets();
  }

  getMarkets(): void {
    this.ms.getMarketList().subscribe(ret => {
        this.marketList = ret.Markets;
    });
  }

  getOrders(marketId: number): Array<Stack> {
    return this.os.getOrders(marketId);
  }

  deleteOrder(marketId: number, exchangeId: number) {
    this.os.popOrder(marketId, exchangeId);
  }



}
