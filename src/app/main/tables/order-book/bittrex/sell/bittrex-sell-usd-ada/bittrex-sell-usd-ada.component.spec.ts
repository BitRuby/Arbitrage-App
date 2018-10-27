import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BittrexSellUsdAdaComponent } from './bittrex-sell-usd-ada.component';

describe('BittrexSellUsdAdaComponent', () => {
  let component: BittrexSellUsdAdaComponent;
  let fixture: ComponentFixture<BittrexSellUsdAdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexSellUsdAdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexSellUsdAdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
