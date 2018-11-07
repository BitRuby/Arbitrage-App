import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrakenSellUsdAdaComponent } from './kraken-sell-usd-ada.component';

describe('KrakenSellUsdAdaComponent', () => {
  let component: KrakenSellUsdAdaComponent;
  let fixture: ComponentFixture<KrakenSellUsdAdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrakenSellUsdAdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrakenSellUsdAdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
