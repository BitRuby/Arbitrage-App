import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { BittrexBuyUsdBtcComponent } from './tables/order-book/bittrex/buy/bittrex-buy-usd-btc/bittrex-buy-usd-btc.component';
import { BittrexSellUsdBtcComponent } from './tables/order-book/bittrex/sell/bittrex-sell-usd-btc/bittrex-sell-usd-btc.component';
import { CommonModule } from '@angular/common';
import { MatListModule, MatTableModule, MatGridListModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { MainRoutingModule } from './main-routing.module';
import { OrderBookService } from '../core/order-book/order-book.service';


@NgModule({
  declarations: [
    MainComponent,
    BittrexBuyUsdBtcComponent,
    BittrexSellUsdBtcComponent
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
