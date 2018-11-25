import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { MatListModule, MatTableModule, MatGridListModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableNumRowsComponent } from './table-num-rows/table-num-rows.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { OrderBookUsdBtcComponent } from './tables/order-book/asks/order-book-usd-btc/order-book-usd-btc.component';
import { OrderBookUsdLtcComponent } from './tables/order-book/asks/order-book-usd-ltc/order-book-usd-ltc.component';
import { OrderBookUsdEthComponent } from './tables/order-book/asks/order-book-usd-eth/order-book-usd-eth.component';
import { OrderBookUsdAdaComponent } from './tables/order-book/asks/order-book-usd-ada/order-book-usd-ada.component';
import { OrderBookUsdUsdtComponent } from './tables/order-book/asks/order-book-usd-usdt/order-book-usd-usdt.component';
import { OrderBookUsdXrpComponent } from './tables/order-book/asks/order-book-usd-xrp/order-book-usd-xrp.component';
import { OrderBookUsdZecComponent } from './tables/order-book/asks/order-book-usd-zec/order-book-usd-zec.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    TableNumRowsComponent,
    OrderBookUsdBtcComponent,
    OrderBookUsdLtcComponent,
    OrderBookUsdEthComponent,
    OrderBookUsdAdaComponent,
    OrderBookUsdUsdtComponent,
    OrderBookUsdXrpComponent,
    OrderBookUsdZecComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatGridListModule,
    MainRoutingModule,
    ScrollToModule.forRoot()
  ],
  providers: [
  ]
})
export class MainModule { }
