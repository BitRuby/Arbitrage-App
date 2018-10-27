import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BittrexBuyUsdZecComponent } from './bittrex-buy-usd-zec.component';

describe('BittrexBuyUsdZecComponent', () => {
  let component: BittrexBuyUsdZecComponent;
  let fixture: ComponentFixture<BittrexBuyUsdZecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexBuyUsdZecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexBuyUsdZecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
