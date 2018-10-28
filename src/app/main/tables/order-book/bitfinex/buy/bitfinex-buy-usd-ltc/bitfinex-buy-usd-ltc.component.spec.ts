import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitfinexBuyUsdLtcComponent } from './bitfinex-buy-usd-ltc.component';

describe('BitfinexBuyUsdLtcComponent', () => {
  let component: BitfinexBuyUsdLtcComponent;
  let fixture: ComponentFixture<BitfinexBuyUsdLtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitfinexBuyUsdLtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitfinexBuyUsdLtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
