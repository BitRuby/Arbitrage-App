import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BittrexSellUsdBtcComponent } from './bittrex-sell-usd-btc.component';

describe('BittrexSellUsdBtcComponent', () => {
  let component: BittrexSellUsdBtcComponent;
  let fixture: ComponentFixture<BittrexSellUsdBtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexSellUsdBtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexSellUsdBtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
