import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrakenSellUsdZecComponent } from './kraken-sell-usd-zec.component';

describe('KrakenSellUsdZecComponent', () => {
  let component: KrakenSellUsdZecComponent;
  let fixture: ComponentFixture<KrakenSellUsdZecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrakenSellUsdZecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrakenSellUsdZecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
