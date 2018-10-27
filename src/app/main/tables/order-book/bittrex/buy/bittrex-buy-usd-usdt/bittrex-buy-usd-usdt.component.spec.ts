import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BittrexBuyUsdUsdtComponent } from './bittrex-buy-usd-usdt.component';

describe('BittrexBuyUsdUsdtComponent', () => {
  let component: BittrexBuyUsdUsdtComponent;
  let fixture: ComponentFixture<BittrexBuyUsdUsdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexBuyUsdUsdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexBuyUsdUsdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
