import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitfinexSellUsdBtcComponent } from './bitfinex-sell-usd-btc.component';

describe('BitfinexSellUsdBtcComponent', () => {
  let component: BitfinexSellUsdBtcComponent;
  let fixture: ComponentFixture<BitfinexSellUsdBtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitfinexSellUsdBtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitfinexSellUsdBtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
