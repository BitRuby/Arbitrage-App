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
import { OrderBookBittrexService } from '../core/order-book-bittrex/order-book-bittrex.service';
import { BitfinexBuyUsdAdaComponent } from './tables/order-book/bitfinex/buy/bitfinex-buy-usd-ada/bitfinex-buy-usd-ada.component';
import { BitfinexBuyUsdBtcComponent } from './tables/order-book/bitfinex/buy/bitfinex-buy-usd-btc/bitfinex-buy-usd-btc.component';
import { BitfinexBuyUsdEthComponent } from './tables/order-book/bitfinex/buy/bitfinex-buy-usd-eth/bitfinex-buy-usd-eth.component';
import { BitfinexBuyUsdLtcComponent } from './tables/order-book/bitfinex/buy/bitfinex-buy-usd-ltc/bitfinex-buy-usd-ltc.component';
import { BitfinexBuyUsdUsdtComponent } from './tables/order-book/bitfinex/buy/bitfinex-buy-usd-usdt/bitfinex-buy-usd-usdt.component';
import { BitfinexBuyUsdXrpComponent } from './tables/order-book/bitfinex/buy/bitfinex-buy-usd-xrp/bitfinex-buy-usd-xrp.component';
import { BitfinexBuyUsdZecComponent } from './tables/order-book/bitfinex/buy/bitfinex-buy-usd-zec/bitfinex-buy-usd-zec.component';
import { BitfinexSellUsdAdaComponent } from './tables/order-book/bitfinex/sell/bitfinex-sell-usd-ada/bitfinex-sell-usd-ada.component';
import { BitfinexSellUsdBtcComponent } from './tables/order-book/bitfinex/sell/bitfinex-sell-usd-btc/bitfinex-sell-usd-btc.component';
import { BitfinexSellUsdEthComponent } from './tables/order-book/bitfinex/sell/bitfinex-sell-usd-eth/bitfinex-sell-usd-eth.component';
import { BitfinexSellUsdLtcComponent } from './tables/order-book/bitfinex/sell/bitfinex-sell-usd-ltc/bitfinex-sell-usd-ltc.component';
import { BitfinexSellUsdUsdtComponent } from './tables/order-book/bitfinex/sell/bitfinex-sell-usd-usdt/bitfinex-sell-usd-usdt.component';
import { BitfinexSellUsdXrpComponent } from './tables/order-book/bitfinex/sell/bitfinex-sell-usd-xrp/bitfinex-sell-usd-xrp.component';
import { BitfinexSellUsdZecComponent } from './tables/order-book/bitfinex/sell/bitfinex-sell-usd-zec/bitfinex-sell-usd-zec.component';



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
    BittrexSellUsdZecComponent,
    BitfinexBuyUsdAdaComponent,
    BitfinexBuyUsdBtcComponent,
    BitfinexBuyUsdEthComponent,
    BitfinexBuyUsdLtcComponent,
    BitfinexBuyUsdUsdtComponent,
    BitfinexBuyUsdXrpComponent,
    BitfinexBuyUsdZecComponent,
    BitfinexSellUsdAdaComponent,
    BitfinexSellUsdBtcComponent,
    BitfinexSellUsdEthComponent,
    BitfinexSellUsdLtcComponent,
    BitfinexSellUsdUsdtComponent,
    BitfinexSellUsdXrpComponent,
    BitfinexSellUsdZecComponent
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
    OrderBookBittrexService
  ]
})
export class MainModule { }
