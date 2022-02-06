import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalPageComponent } from './car-rental-page.component';

describe('CarRentalPageComponent', () => {
  let component: CarRentalPageComponent;
  let fixture: ComponentFixture<CarRentalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRentalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRentalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
