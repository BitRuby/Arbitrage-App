import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinbaseSellUsdEthComponent } from './coinbase-sell-usd-eth.component';

describe('CoinbaseSellUsdEthComponent', () => {
  let component: CoinbaseSellUsdEthComponent;
  let fixture: ComponentFixture<CoinbaseSellUsdEthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinbaseSellUsdEthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinbaseSellUsdEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
