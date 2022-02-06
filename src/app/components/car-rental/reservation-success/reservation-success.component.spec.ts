import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationSuccessComponent } from './reservation-success.component';

describe('ReservationSuccessComponent', () => {
  let component: ReservationSuccessComponent;
  let fixture: ComponentFixture<ReservationSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
