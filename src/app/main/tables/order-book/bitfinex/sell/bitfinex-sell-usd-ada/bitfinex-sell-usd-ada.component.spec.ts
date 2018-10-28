import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitfinexSellUsdAdaComponent } from './bitfinex-sell-usd-ada.component';

describe('BitfinexSellUsdAdaComponent', () => {
  let component: BitfinexSellUsdAdaComponent;
  let fixture: ComponentFixture<BitfinexSellUsdAdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitfinexSellUsdAdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitfinexSellUsdAdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
