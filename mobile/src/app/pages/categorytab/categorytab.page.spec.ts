import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategorytabPage } from './categorytab.page';

describe('CategorytabPage', () => {
  let component: CategorytabPage;
  let fixture: ComponentFixture<CategorytabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategorytabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
