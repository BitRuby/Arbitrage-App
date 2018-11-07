import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrakenSellUsdLtcComponent } from './kraken-sell-usd-ltc.component';

describe('KrakenSellUsdLtcComponent', () => {
  let component: KrakenSellUsdLtcComponent;
  let fixture: ComponentFixture<KrakenSellUsdLtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrakenSellUsdLtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrakenSellUsdLtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
