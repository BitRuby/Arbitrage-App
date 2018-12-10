import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { TableNumRowsComponent } from './table-num-rows/table-num-rows.component';
import { OrderBookUsdBtcComponent } from './tables/order-book/asks/order-book-usd-btc/order-book-usd-btc.component';
import { OrderBookUsdLtcComponent } from './tables/order-book/asks/order-book-usd-ltc/order-book-usd-ltc.component';
import { OrderBookUsdEthComponent } from './tables/order-book/asks/order-book-usd-eth/order-book-usd-eth.component';
import { OrderBookUsdAdaComponent } from './tables/order-book/asks/order-book-usd-ada/order-book-usd-ada.component';
import { OrderBookUsdUsdtComponent } from './tables/order-book/asks/order-book-usd-usdt/order-book-usd-usdt.component';
import { OrderBookUsdXrpComponent } from './tables/order-book/asks/order-book-usd-xrp/order-book-usd-xrp.component';
import { OrderBookUsdZecComponent } from './tables/order-book/asks/order-book-usd-zec/order-book-usd-zec.component';
import { CommonModule } from '@angular/common';
import { MatListModule, MatTableModule, MatGridListModule, MatSortModule, MatPaginatorModule, MatTabsModule,
MatExpansionModule,
MatButtonModule,
MatSlideToggleModule,
MatSelectModule,
MatDialogModule
} from '@angular/material';
import { MainRoutingModule } from './main-routing.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MenuTradeComponent } from './menu/menu-trade/menu-trade.component';
import { ExchangeSummaryComponent } from './modals/exchange-summary/exchange-summary.component';
import { ExchangeSummaryService } from '../core/modal/exchange-summary.service';
import { MenuSettingsComponent } from './menu/menu-settings/menu-settings.component';
import { MenuSettingsAccountsComponent } from './menu/menu-settings/menu-settings-accounts/menu-settings-accounts.component';
import { MenuSettingsExchangesComponent } from './menu/menu-settings/menu-settings-exchanges/menu-settings-exchanges.component';
import { MenuSettingsMarketsComponent } from './menu/menu-settings/menu-settings-markets/menu-settings-markets.component';
import { ExchangeConnectComponent } from './modals/exchange-connect/exchange-connect.component';
import { ExchangeConnectService } from '../core/modal/exchange-connect.service';





@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    TableNumRowsComponent,
    OrderBookUsdBtcComponent,
    OrderBookUsdLtcComponent,
    OrderBookUsdEthComponent,
    OrderBookUsdAdaComponent,
    OrderBookUsdUsdtComponent,
    OrderBookUsdXrpComponent,
    OrderBookUsdZecComponent,
    MenuTradeComponent,
    ExchangeSummaryComponent,
    MenuSettingsComponent,
    MenuSettingsAccountsComponent,
    MenuSettingsExchangesComponent,
    MenuSettingsMarketsComponent,
    ExchangeConnectComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    MatGridListModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatSlideToggleModule,
    MainRoutingModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    ExchangeSummaryService,
    ExchangeConnectService
  ],
  entryComponents: [
    ExchangeSummaryComponent,
    ExchangeConnectComponent
  ]
})
export class MainModule { }
