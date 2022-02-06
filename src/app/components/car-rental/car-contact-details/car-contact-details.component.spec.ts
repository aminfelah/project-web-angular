import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarContactDetailsComponent } from './car-contact-details.component';

describe('ContactDetailsComponent', () => {
  let component: CarContactDetailsComponent;
  let fixture: ComponentFixture<CarContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarContactDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
