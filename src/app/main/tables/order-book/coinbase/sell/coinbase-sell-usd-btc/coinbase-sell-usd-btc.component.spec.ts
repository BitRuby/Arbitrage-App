import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinbaseSellUsdBtcComponent } from './coinbase-sell-usd-btc.component';

describe('CoinbaseSellUsdBtcComponent', () => {
  let component: CoinbaseSellUsdBtcComponent;
  let fixture: ComponentFixture<CoinbaseSellUsdBtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinbaseSellUsdBtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinbaseSellUsdBtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
