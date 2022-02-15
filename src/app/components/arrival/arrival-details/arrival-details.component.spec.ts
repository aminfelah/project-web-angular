import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalDetailsComponent } from './arrival-details.component';

describe('ArrivalDetailsComponent', () => {
  let component: ArrivalDetailsComponent;
  let fixture: ComponentFixture<ArrivalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrivalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
