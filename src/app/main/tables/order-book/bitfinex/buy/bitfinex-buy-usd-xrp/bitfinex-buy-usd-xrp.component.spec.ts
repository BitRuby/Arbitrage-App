import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitfinexBuyUsdXrpComponent } from './bitfinex-buy-usd-xrp.component';

describe('BitfinexBuyUsdXrpComponent', () => {
  let component: BitfinexBuyUsdXrpComponent;
  let fixture: ComponentFixture<BitfinexBuyUsdXrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitfinexBuyUsdXrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitfinexBuyUsdXrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
