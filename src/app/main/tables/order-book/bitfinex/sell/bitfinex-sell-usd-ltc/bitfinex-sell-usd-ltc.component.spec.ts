import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitfinexSellUsdLtcComponent } from './bitfinex-sell-usd-ltc.component';

describe('BitfinexSellUsdLtcComponent', () => {
  let component: BitfinexSellUsdLtcComponent;
  let fixture: ComponentFixture<BitfinexSellUsdLtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitfinexSellUsdLtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitfinexSellUsdLtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
