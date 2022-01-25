import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDiscountComponent } from './travel-discount.component';

describe('TravelDiscountComponent', () => {
  let component: TravelDiscountComponent;
  let fixture: ComponentFixture<TravelDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
