import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupDetailsComponent } from './pickup-details.component';

describe('PickupDetailsComponent', () => {
  let component: PickupDetailsComponent;
  let fixture: ComponentFixture<PickupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
