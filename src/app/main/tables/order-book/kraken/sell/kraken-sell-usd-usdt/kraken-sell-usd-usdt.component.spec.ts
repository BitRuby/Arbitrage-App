import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrakenSellUsdUsdtComponent } from './kraken-sell-usd-usdt.component';

describe('KrakenSellUsdUsdtComponent', () => {
  let component: KrakenSellUsdUsdtComponent;
  let fixture: ComponentFixture<KrakenSellUsdUsdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrakenSellUsdUsdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrakenSellUsdUsdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
