import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitfinexSellUsdEthComponent } from './bitfinex-sell-usd-eth.component';

describe('BitfinexSellUsdEthComponent', () => {
  let component: BitfinexSellUsdEthComponent;
  let fixture: ComponentFixture<BitfinexSellUsdEthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitfinexSellUsdEthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitfinexSellUsdEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
