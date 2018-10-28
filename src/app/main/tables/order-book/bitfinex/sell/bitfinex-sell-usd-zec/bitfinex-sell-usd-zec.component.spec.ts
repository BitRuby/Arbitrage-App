import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitfinexSellUsdZecComponent } from './bitfinex-sell-usd-zec.component';

describe('BitfinexSellUsdZecComponent', () => {
  let component: BitfinexSellUsdZecComponent;
  let fixture: ComponentFixture<BitfinexSellUsdZecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitfinexSellUsdZecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitfinexSellUsdZecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
