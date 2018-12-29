import { CommonModule } from '@angular/common';
import { ExchangeConnectComponent } from './modals/exchange-connect/exchange-connect.component';
import { ExchangeConnectService } from '../core/modal/exchange-connect.service';
import { ExchangeSummaryComponent } from './modals/exchange-summary/exchange-summary.component';
import { ExchangeSummaryService } from '../core/modal/exchange-summary.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import {
  MatButtonModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule
  } from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { MenuSettingsAccountsComponent } from './menu/menu-settings/menu-settings-accounts/menu-settings-accounts.component';
import { MenuSettingsComponent } from './menu/menu-settings/menu-settings.component';
import { MenuSettingsExchangesComponent } from './menu/menu-settings/menu-settings-exchanges/menu-settings-exchanges.component';
import { MenuSettingsMarketsComponent } from './menu/menu-settings/menu-settings-markets/menu-settings-markets.component';
import { MenuTradeComponent } from './menu/menu-trade/menu-trade.component';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { TableNumRowsComponent } from './table-num-rows/table-num-rows.component';
import { FormsModule } from '@angular/forms';
import { BookUsdtBtcComponent } from './tables/order-book/book-usdt-btc/book-usdt-btc.component';
import { BookUsdtEthComponent } from './tables/order-book/book-usdt-eth/book-usdt-eth.component';
import { BookUsdtLtcComponent } from './tables/order-book/book-usdt-ltc/book-usdt-ltc.component';
import { BookUsdtXrpComponent } from './tables/order-book/book-usdt-xrp/book-usdt-xrp.component';
import { BookUsdtZecComponent } from './tables/order-book/book-usdt-zec/book-usdt-zec.component';
import { BookUsdtAdaComponent } from './tables/order-book/book-usdt-ada/book-usdt-ada.component';
import { BookUsdtXmrComponent } from './tables/order-book/book-usdt-xmr/book-usdt-xmr.component';
import { BookUsdtBchComponent } from './tables/order-book/book-usdt-bch/book-usdt-bch.component';





@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    TableNumRowsComponent,
    MenuTradeComponent,
    ExchangeSummaryComponent,
    MenuSettingsComponent,
    MenuSettingsAccountsComponent,
    MenuSettingsExchangesComponent,
    MenuSettingsMarketsComponent,
    ExchangeConnectComponent,
    BookUsdtBtcComponent,
    BookUsdtEthComponent,
    BookUsdtLtcComponent,
    BookUsdtXrpComponent,
    BookUsdtZecComponent,
    BookUsdtAdaComponent,
    BookUsdtXmrComponent,
    BookUsdtBchComponent
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
    MatInputModule,
    MatSlideToggleModule,
    MainRoutingModule,
    FormsModule,
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
