import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitfinexSellUsdXrpComponent } from './bitfinex-sell-usd-xrp.component';

describe('BitfinexSellUsdXrpComponent', () => {
  let component: BitfinexSellUsdXrpComponent;
  let fixture: ComponentFixture<BitfinexSellUsdXrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitfinexSellUsdXrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitfinexSellUsdXrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
