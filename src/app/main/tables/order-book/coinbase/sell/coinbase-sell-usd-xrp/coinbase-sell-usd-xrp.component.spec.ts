import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinbaseSellUsdXrpComponent } from './coinbase-sell-usd-xrp.component';

describe('CoinbaseSellUsdXrpComponent', () => {
  let component: CoinbaseSellUsdXrpComponent;
  let fixture: ComponentFixture<CoinbaseSellUsdXrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinbaseSellUsdXrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinbaseSellUsdXrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
