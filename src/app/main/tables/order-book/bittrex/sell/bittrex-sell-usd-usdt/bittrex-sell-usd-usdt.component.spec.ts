import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BittrexSellUsdUsdtComponent } from './bittrex-sell-usd-usdt.component';

describe('BittrexSellUsdUsdtComponent', () => {
  let component: BittrexSellUsdUsdtComponent;
  let fixture: ComponentFixture<BittrexSellUsdUsdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexSellUsdUsdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexSellUsdUsdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
