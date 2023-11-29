import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarttabPage } from './carttab.page';

describe('CarttabPage', () => {
  let component: CarttabPage;
  let fixture: ComponentFixture<CarttabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarttabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
