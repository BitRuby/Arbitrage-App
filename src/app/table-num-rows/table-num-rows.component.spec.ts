import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNumRowsComponent } from './table-num-rows.component';

describe('TableNumRowsComponent', () => {
  let component: TableNumRowsComponent;
  let fixture: ComponentFixture<TableNumRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableNumRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNumRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
