import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BittrexSellUsdXrpComponent } from './bittrex-sell-usd-xrp.component';

describe('BittrexSellUsdXrpComponent', () => {
  let component: BittrexSellUsdXrpComponent;
  let fixture: ComponentFixture<BittrexSellUsdXrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexSellUsdXrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexSellUsdXrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
