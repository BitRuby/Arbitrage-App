import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitfinexBuyUsdBtcComponent } from './bitfinex-buy-usd-btc.component';

describe('BitfinexBuyUsdBtcComponent', () => {
  let component: BitfinexBuyUsdBtcComponent;
  let fixture: ComponentFixture<BitfinexBuyUsdBtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitfinexBuyUsdBtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitfinexBuyUsdBtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
