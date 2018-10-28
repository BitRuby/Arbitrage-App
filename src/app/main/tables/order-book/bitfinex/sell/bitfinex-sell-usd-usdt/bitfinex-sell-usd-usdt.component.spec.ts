import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitfinexSellUsdUsdtComponent } from './bitfinex-sell-usd-usdt.component';

describe('BitfinexSellUsdUsdtComponent', () => {
  let component: BitfinexSellUsdUsdtComponent;
  let fixture: ComponentFixture<BitfinexSellUsdUsdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitfinexSellUsdUsdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitfinexSellUsdUsdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
