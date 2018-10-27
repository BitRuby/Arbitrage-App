import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BittrexBuyUsdEthComponent } from './bittrex-buy-usd-eth.component';

describe('BittrexBuyUsdEthComponent', () => {
  let component: BittrexBuyUsdEthComponent;
  let fixture: ComponentFixture<BittrexBuyUsdEthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexBuyUsdEthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexBuyUsdEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
