import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductspagePage } from './productspage.page';

describe('ProductspagePage', () => {
  let component: ProductspagePage;
  let fixture: ComponentFixture<ProductspagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
