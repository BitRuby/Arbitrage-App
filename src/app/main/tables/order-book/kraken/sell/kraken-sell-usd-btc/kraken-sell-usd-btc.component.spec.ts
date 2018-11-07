import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrakenSellUsdBtcComponent } from './kraken-sell-usd-btc.component';

describe('KrakenSellUsdBtcComponent', () => {
  let component: KrakenSellUsdBtcComponent;
  let fixture: ComponentFixture<KrakenSellUsdBtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrakenSellUsdBtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrakenSellUsdBtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
