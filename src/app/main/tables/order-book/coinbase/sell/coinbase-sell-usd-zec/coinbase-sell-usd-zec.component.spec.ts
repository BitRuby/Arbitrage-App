import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinbaseSellUsdZecComponent } from './coinbase-sell-usd-zec.component';

describe('CoinbaseSellUsdZecComponent', () => {
  let component: CoinbaseSellUsdZecComponent;
  let fixture: ComponentFixture<CoinbaseSellUsdZecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinbaseSellUsdZecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinbaseSellUsdZecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
