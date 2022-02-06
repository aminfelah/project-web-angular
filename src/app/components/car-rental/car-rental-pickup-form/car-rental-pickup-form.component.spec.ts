import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalPickupFormComponent } from './car-rental-pickup-form.component';

describe('CarRentalPickupFormComponent', () => {
  let component: CarRentalPickupFormComponent;
  let fixture: ComponentFixture<CarRentalPickupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRentalPickupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRentalPickupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
