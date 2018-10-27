import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BittrexSellUsdLtcComponent } from './bittrex-sell-usd-ltc.component';

describe('BittrexSellUsdLtcComponent', () => {
  let component: BittrexSellUsdLtcComponent;
  let fixture: ComponentFixture<BittrexSellUsdLtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexSellUsdLtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexSellUsdLtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
