import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BittrexSellUsdZecComponent } from './bittrex-sell-usd-zec.component';

describe('BittrexSellUsdZecComponent', () => {
  let component: BittrexSellUsdZecComponent;
  let fixture: ComponentFixture<BittrexSellUsdZecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexSellUsdZecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexSellUsdZecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
