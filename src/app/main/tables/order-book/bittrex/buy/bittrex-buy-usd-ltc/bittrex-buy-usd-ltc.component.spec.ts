import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BittrexBuyUsdLtcComponent } from './bittrex-buy-usd-ltc.component';

describe('BittrexBuyUsdLtcComponent', () => {
  let component: BittrexBuyUsdLtcComponent;
  let fixture: ComponentFixture<BittrexBuyUsdLtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexBuyUsdLtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexBuyUsdLtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
