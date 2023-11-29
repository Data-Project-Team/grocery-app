import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailspagePage } from './detailspage.page';

describe('DetailspagePage', () => {
  let component: DetailspagePage;
  let fixture: ComponentFixture<DetailspagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
