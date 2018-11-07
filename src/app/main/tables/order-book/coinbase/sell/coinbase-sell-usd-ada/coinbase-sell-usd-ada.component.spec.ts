import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinbaseSellUsdAdaComponent } from './coinbase-sell-usd-ada.component';

describe('CoinbaseSellUsdAdaComponent', () => {
  let component: CoinbaseSellUsdAdaComponent;
  let fixture: ComponentFixture<CoinbaseSellUsdAdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinbaseSellUsdAdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinbaseSellUsdAdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
