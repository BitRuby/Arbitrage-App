import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinbaseSellUsdUsdtComponent } from './coinbase-sell-usd-usdt.component';

describe('CoinbaseSellUsdUsdtComponent', () => {
  let component: CoinbaseSellUsdUsdtComponent;
  let fixture: ComponentFixture<CoinbaseSellUsdUsdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinbaseSellUsdUsdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinbaseSellUsdUsdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
