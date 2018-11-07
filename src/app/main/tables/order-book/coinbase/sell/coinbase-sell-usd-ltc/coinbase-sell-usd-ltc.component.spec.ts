import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinbaseSellUsdLtcComponent } from './coinbase-sell-usd-ltc.component';

describe('CoinbaseSellUsdLtcComponent', () => {
  let component: CoinbaseSellUsdLtcComponent;
  let fixture: ComponentFixture<CoinbaseSellUsdLtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinbaseSellUsdLtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinbaseSellUsdLtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
