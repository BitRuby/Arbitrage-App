import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUsdtXrpComponent } from './book-usdt-xrp.component';

describe('BookUsdtXrpComponent', () => {
  let component: BookUsdtXrpComponent;
  let fixture: ComponentFixture<BookUsdtXrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookUsdtXrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookUsdtXrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
