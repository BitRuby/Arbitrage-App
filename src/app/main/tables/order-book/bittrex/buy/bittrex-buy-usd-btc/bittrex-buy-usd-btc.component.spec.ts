import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BittrexBuyUsdBtcComponent } from './bittrex-buy-usd-btc.component';


describe('BittrexBuyUsdBtcComponent', () => {
  let component: BittrexBuyUsdBtcComponent;
  let fixture: ComponentFixture<BittrexBuyUsdBtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexBuyUsdBtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexBuyUsdBtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
