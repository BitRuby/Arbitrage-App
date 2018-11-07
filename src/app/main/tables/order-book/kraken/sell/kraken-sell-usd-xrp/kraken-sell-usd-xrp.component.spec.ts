import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrakenSellUsdXrpComponent } from './kraken-sell-usd-xrp.component';

describe('KrakenSellUsdXrpComponent', () => {
  let component: KrakenSellUsdXrpComponent;
  let fixture: ComponentFixture<KrakenSellUsdXrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrakenSellUsdXrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrakenSellUsdXrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
