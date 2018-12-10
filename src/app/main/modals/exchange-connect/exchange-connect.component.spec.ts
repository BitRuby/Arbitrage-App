import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeConnectComponent } from './exchange-connect.component';

describe('ExchangeConnectComponent', () => {
  let component: ExchangeConnectComponent;
  let fixture: ComponentFixture<ExchangeConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
