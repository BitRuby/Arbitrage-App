import { Component, OnInit } from '@angular/core';
import { MarketArray } from 'src/app/core/market-list/market-array.model';
import { MarketListService } from 'src/app/core/market-list/market-list.service';

@Component({
  selector: 'app-menu-settings-markets',
  templateUrl: './menu-settings-markets.component.html',
  styleUrls: ['./menu-settings-markets.component.css']
})
export class MenuSettingsMarketsComponent implements OnInit {
  marketList: MarketArray[];
  constructor(private ms: MarketListService) { }

  ngOnInit() {
    this.getMarkets();
  }
  getMarkets(): any {
    this.ms.getMarketList().subscribe(val => {
      this.marketList = val.Markets;
    });
  }

}
