import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BittrexBuyUsdXrpComponent } from './bittrex-buy-usd-xrp.component';

describe('BittrexBuyUsdXrpComponent', () => {
  let component: BittrexBuyUsdXrpComponent;
  let fixture: ComponentFixture<BittrexBuyUsdXrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexBuyUsdXrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexBuyUsdXrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
