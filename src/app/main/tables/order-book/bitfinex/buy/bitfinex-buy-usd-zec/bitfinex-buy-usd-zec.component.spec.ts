import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitfinexBuyUsdZecComponent } from './bitfinex-buy-usd-zec.component';

describe('BitfinexBuyUsdZecComponent', () => {
  let component: BitfinexBuyUsdZecComponent;
  let fixture: ComponentFixture<BitfinexBuyUsdZecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitfinexBuyUsdZecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitfinexBuyUsdZecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
