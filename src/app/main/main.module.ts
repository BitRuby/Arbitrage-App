import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { BittrexBuyUsdBtcComponent } from './tables/order-book/bittrex/buy/bittrex-buy-usd-btc/bittrex-buy-usd-btc.component';
import { BittrexBuyUsdAdaComponent } from './tables/order-book/bittrex/buy/bittrex-buy-usd-ada/bittrex-buy-usd-ada.component';
import { BittrexBuyUsdEthComponent } from './tables/order-book/bittrex/buy/bittrex-buy-usd-eth/bittrex-buy-usd-eth.component';
import { BittrexBuyUsdLtcComponent } from './tables/order-book/bittrex/buy/bittrex-buy-usd-ltc/bittrex-buy-usd-ltc.component';
import { BittrexBuyUsdUsdtComponent } from './tables/order-book/bittrex/buy/bittrex-buy-usd-usdt/bittrex-buy-usd-usdt.component';
import { BittrexBuyUsdXrpComponent } from './tables/order-book/bittrex/buy/bittrex-buy-usd-xrp/bittrex-buy-usd-xrp.component';
import { BittrexBuyUsdZecComponent } from './tables/order-book/bittrex/buy/bittrex-buy-usd-zec/bittrex-buy-usd-zec.component';
import { BittrexSellUsdBtcComponent } from './tables/order-book/bittrex/sell/bittrex-sell-usd-btc/bittrex-sell-usd-btc.component';
import { BittrexSellUsdAdaComponent } from './tables/order-book/bittrex/sell/bittrex-sell-usd-ada/bittrex-sell-usd-ada.component';
import { BittrexSellUsdEthComponent } from './tables/order-book/bittrex/sell/bittrex-sell-usd-eth/bittrex-sell-usd-eth.component';
import { BittrexSellUsdLtcComponent } from './tables/order-book/bittrex/sell/bittrex-sell-usd-ltc/bittrex-sell-usd-ltc.component';
import { BittrexSellUsdUsdtComponent } from './tables/order-book/bittrex/sell/bittrex-sell-usd-usdt/bittrex-sell-usd-usdt.component';
import { BittrexSellUsdXrpComponent } from './tables/order-book/bittrex/sell/bittrex-sell-usd-xrp/bittrex-sell-usd-xrp.component';
import { BittrexSellUsdZecComponent } from './tables/order-book/bittrex/sell/bittrex-sell-usd-zec/bittrex-sell-usd-zec.component';
import { CommonModule } from '@angular/common';
import { MatListModule, MatTableModule, MatGridListModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { MainRoutingModule } from './main-routing.module';
import { OrderBookService } from '../core/order-book/order-book.service';



@NgModule({
  declarations: [
    MainComponent,
    BittrexBuyUsdBtcComponent,
    BittrexSellUsdBtcComponent,
    BittrexBuyUsdAdaComponent,
    BittrexBuyUsdEthComponent,
    BittrexBuyUsdLtcComponent,
    BittrexBuyUsdUsdtComponent,
    BittrexBuyUsdXrpComponent,
    BittrexBuyUsdZecComponent,
    BittrexSellUsdAdaComponent,
    BittrexSellUsdEthComponent,
    BittrexSellUsdLtcComponent,
    BittrexSellUsdUsdtComponent,
    BittrexSellUsdXrpComponent,
    BittrexSellUsdZecComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatGridListModule,
    MainRoutingModule
  ],
  providers: [
    OrderBookService
  ]
})
export class MainModule { }
