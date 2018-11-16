import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitfinexSellComponent } from './bitfinex-sell.component';

describe('BitfinexSellComponent', () => {
  let component: BitfinexSellComponent;
  let fixture: ComponentFixture<BitfinexSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitfinexSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitfinexSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
