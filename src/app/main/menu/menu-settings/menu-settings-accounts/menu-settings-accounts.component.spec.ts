import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSettingsAccountsComponent } from './menu-settings-accounts.component';

describe('MenuSettingsAccountsComponent', () => {
  let component: MenuSettingsAccountsComponent;
  let fixture: ComponentFixture<MenuSettingsAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSettingsAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSettingsAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
