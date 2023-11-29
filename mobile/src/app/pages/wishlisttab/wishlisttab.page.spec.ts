import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WishlisttabPage } from './wishlisttab.page';

describe('WishlisttabPage', () => {
  let component: WishlisttabPage;
  let fixture: ComponentFixture<WishlisttabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WishlisttabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
