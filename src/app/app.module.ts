import localePl from '@angular/common/locales/pl';
import { AppComponent } from './app.component';
import { BookUsdtAdaComponent } from './tables/order-book/book-usdt-ada/book-usdt-ada.component';
import { BookUsdtBchComponent } from './tables/order-book/book-usdt-bch/book-usdt-bch.component';
import { BookUsdtBtcComponent } from './tables/order-book/book-usdt-btc/book-usdt-btc.component';
import { BookUsdtEthComponent } from './tables/order-book/book-usdt-eth/book-usdt-eth.component';
import { BookUsdtLtcComponent } from './tables/order-book/book-usdt-ltc/book-usdt-ltc.component';
import { BookUsdtNanoComponent } from './tables/order-book/book-usdt-nano/book-usdt-nano.component';
import { BookUsdtXmrComponent } from './tables/order-book/book-usdt-xmr/book-usdt-xmr.component';
import { BookUsdtXrpComponent } from './tables/order-book/book-usdt-xrp/book-usdt-xrp.component';
import { BookUsdtZecComponent } from './tables/order-book/book-usdt-zec/book-usdt-zec.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ExchangeSummaryComponent } from './modals/exchange-summary/exchange-summary.component';
import { ExchangeSummaryService } from './core/modal/exchange-summary.service';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
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
import { MenuTradeComponent } from './menu/menu-trade/menu-trade.component';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { TableNumRowsComponent } from './table-num-rows/table-num-rows.component';

registerLocaleData(localePl);




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    TableNumRowsComponent,
    MenuTradeComponent,
    ExchangeSummaryComponent,
    MenuSettingsComponent,
    MenuSettingsAccountsComponent,
    BookUsdtBtcComponent,
    BookUsdtEthComponent,
    BookUsdtLtcComponent,
    BookUsdtXrpComponent,
    BookUsdtZecComponent,
    BookUsdtAdaComponent,
    BookUsdtXmrComponent,
    BookUsdtBchComponent,
    BookUsdtNanoComponent
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
    FormsModule,
    ScrollToModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ExchangeSummaryService
  ],
  entryComponents: [
    ExchangeSummaryComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
