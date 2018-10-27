import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BittrexBuyUsdAdaComponent } from './bittrex-buy-usd-ada.component';

describe('BittrexBuyUsdAdaComponent', () => {
  let component: BittrexBuyUsdAdaComponent;
  let fixture: ComponentFixture<BittrexBuyUsdAdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BittrexBuyUsdAdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BittrexBuyUsdAdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
