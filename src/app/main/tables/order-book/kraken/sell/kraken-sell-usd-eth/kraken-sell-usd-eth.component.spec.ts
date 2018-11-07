import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrakenSellUsdEthComponent } from './kraken-sell-usd-eth.component';

describe('KrakenSellUsdEthComponent', () => {
  let component: KrakenSellUsdEthComponent;
  let fixture: ComponentFixture<KrakenSellUsdEthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrakenSellUsdEthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrakenSellUsdEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
