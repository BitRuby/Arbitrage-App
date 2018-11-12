import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { MatListModule, MatTableModule, MatGridListModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { MainRoutingModule } from './main-routing.module';
import { BittrexSellUsdBtcComponent } from './tables/order-book/bittrex/sell/bittrex-sell-usd-btc/bittrex-sell-usd-btc.component';
import { BittrexSellUsdAdaComponent } from './tables/order-book/bittrex/sell/bittrex-sell-usd-ada/bittrex-sell-usd-ada.component';
import { BittrexSellUsdEthComponent } from './tables/order-book/bittrex/sell/bittrex-sell-usd-eth/bittrex-sell-usd-eth.component';
import { BittrexSellUsdLtcComponent } from './tables/order-book/bittrex/sell/bittrex-sell-usd-ltc/bittrex-sell-usd-ltc.component';
import { BittrexSellUsdUsdtComponent } from './tables/order-book/bittrex/sell/bittrex-sell-usd-usdt/bittrex-sell-usd-usdt.component';
import { BittrexSellUsdXrpComponent } from './tables/order-book/bittrex/sell/bittrex-sell-usd-xrp/bittrex-sell-usd-xrp.component';
import { BittrexSellUsdZecComponent } from './tables/order-book/bittrex/sell/bittrex-sell-usd-zec/bittrex-sell-usd-zec.component';
import { BitfinexSellUsdAdaComponent } from './tables/order-book/bitfinex/sell/bitfinex-sell-usd-ada/bitfinex-sell-usd-ada.component';
import { BitfinexSellUsdBtcComponent } from './tables/order-book/bitfinex/sell/bitfinex-sell-usd-btc/bitfinex-sell-usd-btc.component';
import { BitfinexSellUsdEthComponent } from './tables/order-book/bitfinex/sell/bitfinex-sell-usd-eth/bitfinex-sell-usd-eth.component';
import { BitfinexSellUsdLtcComponent } from './tables/order-book/bitfinex/sell/bitfinex-sell-usd-ltc/bitfinex-sell-usd-ltc.component';
import { BitfinexSellUsdUsdtComponent } from './tables/order-book/bitfinex/sell/bitfinex-sell-usd-usdt/bitfinex-sell-usd-usdt.component';
import { BitfinexSellUsdXrpComponent } from './tables/order-book/bitfinex/sell/bitfinex-sell-usd-xrp/bitfinex-sell-usd-xrp.component';
import { BitfinexSellUsdZecComponent } from './tables/order-book/bitfinex/sell/bitfinex-sell-usd-zec/bitfinex-sell-usd-zec.component';
import { KrakenSellUsdAdaComponent } from './tables/order-book/kraken/sell/kraken-sell-usd-ada/kraken-sell-usd-ada.component';
import { KrakenSellUsdBtcComponent } from './tables/order-book/kraken/sell/kraken-sell-usd-btc/kraken-sell-usd-btc.component';
import { KrakenSellUsdEthComponent } from './tables/order-book/kraken/sell/kraken-sell-usd-eth/kraken-sell-usd-eth.component';
import { KrakenSellUsdLtcComponent } from './tables/order-book/kraken/sell/kraken-sell-usd-ltc/kraken-sell-usd-ltc.component';
import { KrakenSellUsdUsdtComponent } from './tables/order-book/kraken/sell/kraken-sell-usd-usdt/kraken-sell-usd-usdt.component';
import { KrakenSellUsdXrpComponent } from './tables/order-book/kraken/sell/kraken-sell-usd-xrp/kraken-sell-usd-xrp.component';
import { KrakenSellUsdZecComponent } from './tables/order-book/kraken/sell/kraken-sell-usd-zec/kraken-sell-usd-zec.component';
import { OrderBookBittrexService } from '../core/order-book-bittrex/order-book-bittrex.service';
import { CoinbaseSellUsdAdaComponent } from './tables/order-book/coinbase/sell/coinbase-sell-usd-ada/coinbase-sell-usd-ada.component';
import { CoinbaseSellUsdBtcComponent } from './tables/order-book/coinbase/sell/coinbase-sell-usd-btc/coinbase-sell-usd-btc.component';
import { CoinbaseSellUsdEthComponent } from './tables/order-book/coinbase/sell/coinbase-sell-usd-eth/coinbase-sell-usd-eth.component';
import { CoinbaseSellUsdLtcComponent } from './tables/order-book/coinbase/sell/coinbase-sell-usd-ltc/coinbase-sell-usd-ltc.component';
import { CoinbaseSellUsdUsdtComponent } from './tables/order-book/coinbase/sell/coinbase-sell-usd-usdt/coinbase-sell-usd-usdt.component';
import { CoinbaseSellUsdXrpComponent } from './tables/order-book/coinbase/sell/coinbase-sell-usd-xrp/coinbase-sell-usd-xrp.component';
import { CoinbaseSellUsdZecComponent } from './tables/order-book/coinbase/sell/coinbase-sell-usd-zec/coinbase-sell-usd-zec.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    MainComponent,
    BittrexSellUsdBtcComponent,
    BittrexSellUsdAdaComponent,
    BittrexSellUsdEthComponent,
    BittrexSellUsdLtcComponent,
    BittrexSellUsdUsdtComponent,
    BittrexSellUsdXrpComponent,
    BittrexSellUsdZecComponent,
    BitfinexSellUsdAdaComponent,
    BitfinexSellUsdBtcComponent,
    BitfinexSellUsdEthComponent,
    BitfinexSellUsdLtcComponent,
    BitfinexSellUsdUsdtComponent,
    BitfinexSellUsdXrpComponent,
    BitfinexSellUsdZecComponent,
    KrakenSellUsdAdaComponent,
    KrakenSellUsdBtcComponent,
    KrakenSellUsdEthComponent,
    KrakenSellUsdLtcComponent,
    KrakenSellUsdUsdtComponent,
    KrakenSellUsdXrpComponent,
    KrakenSellUsdZecComponent,
    CoinbaseSellUsdAdaComponent,
    CoinbaseSellUsdBtcComponent,
    CoinbaseSellUsdEthComponent,
    CoinbaseSellUsdLtcComponent,
    CoinbaseSellUsdUsdtComponent,
    CoinbaseSellUsdXrpComponent,
    CoinbaseSellUsdZecComponent,
    HeaderComponent,
    FooterComponent
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
