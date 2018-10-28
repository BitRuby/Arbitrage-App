import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitfinexBuyUsdUsdtComponent } from './bitfinex-buy-usd-usdt.component';

describe('BitfinexBuyUsdUsdtComponent', () => {
  let component: BitfinexBuyUsdUsdtComponent;
  let fixture: ComponentFixture<BitfinexBuyUsdUsdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitfinexBuyUsdUsdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitfinexBuyUsdUsdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
