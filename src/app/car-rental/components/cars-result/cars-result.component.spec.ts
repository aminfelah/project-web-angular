import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsResultComponent } from './cars-result.component';

describe('CarsResultComponent', () => {
  let component: CarsResultComponent;
  let fixture: ComponentFixture<CarsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
