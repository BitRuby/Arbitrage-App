import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitfinexBuyUsdAdaComponent } from './bitfinex-buy-usd-ada.component';

describe('BitfinexBuyUsdAdaComponent', () => {
  let component: BitfinexBuyUsdAdaComponent;
  let fixture: ComponentFixture<BitfinexBuyUsdAdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitfinexBuyUsdAdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitfinexBuyUsdAdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
