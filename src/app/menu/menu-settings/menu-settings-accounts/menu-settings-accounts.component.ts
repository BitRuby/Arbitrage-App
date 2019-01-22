import { Component, OnInit } from '@angular/core';
import { ExchangeArray } from 'src/app/core/exchange-list/exchange-array.model';
import { ExchangeListService } from 'src/app/core/exchange-list/exchange-list.service';
import { UserBalance } from 'src/app/core/user/user-balance.model';
import { UserOrder } from 'src/app/core/user/user-order.model';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-menu-settings-accounts',
  templateUrl: './menu-settings-accounts.component.html',
  styleUrls: ['./menu-settings-accounts.component.css']
})
export class MenuSettingsAccountsComponent implements OnInit {
  panelOpenState: Boolean = false;
  allExpandState = true;
  exchangeList: ExchangeArray[];
  userBalances = new Array<UserBalance[]>();
  userOrders = new Array<UserOrder[]>();
  constructor(private us: UserService, private es: ExchangeListService) {}

  ngOnInit() {
    this.getExchanges();
  }
  getExchanges(): void {
    this.es.getExchangeList().subscribe(ret => {
      this.exchangeList = ret.Exchanges;
      this.getUserBalances(this.exchangeList.length);
      this.getUserOrders(this.exchangeList.length);
    });
  }

  getUserBalances(size): void {
    for (let i = 1; i <= size; i++) {
      this.us.getUserBalances(i).subscribe(data => {
        this.userBalances[i] = data;
      });
    }
  }
  getUserOrders(size): void {
    for (let i = 1; i <= size; i++) {
      this.us.getUserOrders(i).subscribe(data => {
        this.userOrders[i] = data;
      });
    }
  }
}
