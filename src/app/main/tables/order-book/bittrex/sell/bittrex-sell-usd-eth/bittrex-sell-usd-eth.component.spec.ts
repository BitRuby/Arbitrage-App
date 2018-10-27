import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BittrexSellUsdEthComponent } from './bittrex-sell-usd-eth.component';

describe('BittrexSellUsdEthComponent', () => {
  let component: BittrexSellUsdEthComponent;
  let fixture: ComponentFixture<BittrexSellUsdEthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexSellUsdEthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexSellUsdEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
