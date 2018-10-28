import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitfinexBuyUsdEthComponent } from './bitfinex-buy-usd-eth.component';

describe('BitfinexBuyUsdEthComponent', () => {
  let component: BitfinexBuyUsdEthComponent;
  let fixture: ComponentFixture<BitfinexBuyUsdEthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitfinexBuyUsdEthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitfinexBuyUsdEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
