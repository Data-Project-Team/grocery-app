import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccounttabPage } from './accounttab.page';

describe('AccounttabPage', () => {
  let component: AccounttabPage;
  let fixture: ComponentFixture<AccounttabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccounttabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
