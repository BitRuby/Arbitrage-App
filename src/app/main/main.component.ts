import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
  } from '@angular/core';
import { ExchangeArray } from '../core/exchange-list/exchange-array.model';
import { ExchangeListService } from '../core/exchange-list/exchange-list.service';
import { ExchangeSummaryService } from '../core/modal/exchange-summary.service';
import { MarketArray } from '../core/market-list/market-array.model';
import { MarketListService } from '../core/market-list/market-list.service';
import { OrderBookUsdBtcComponent } from './tables/order-book/asks/order-book-usd-btc/order-book-usd-btc.component';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit, AfterViewInit  {

  marketList: MarketArray[];
  exchangeList: ExchangeArray[];

  @ViewChild('orderBookTable', { read: ViewContainerRef }) entry: ViewContainerRef;


  constructor(private modalService: ExchangeSummaryService, private marketListService: MarketListService,
    private exchangeListService: ExchangeListService, private resolver: ComponentFactoryResolver) {
      this.marketList = [];
      this.exchangeList = [];
      this.loadData();
  }

  ngAfterViewInit(): void {
  }

  createComponent() {
    const factory = this.resolver.resolveComponentFactory(OrderBookUsdBtcComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.currency1 = 'BTC';
    componentRef.instance.currency2 = 'USD';
  }

  private loadData() {
    this.marketListService.getMarketList().subscribe(data => {
      this.marketList = data.Markets;
    });
    this.exchangeListService.getExchangeList().subscribe(data => {
      this.exchangeList = data.Exchanges;
    });
  }

  private openModal(exchangeName: string, currency1: string, currency2: string): void {
    this.modalService.changeExchangeSummary(exchangeName, currency1, currency2);
  }

  ngOnInit() {
  }

}
