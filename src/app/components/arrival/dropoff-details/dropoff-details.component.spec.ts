import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropoffDetailsComponent } from './dropoff-details.component';

describe('DropoffDetailsComponent', () => {
  let component: DropoffDetailsComponent;
  let fixture: ComponentFixture<DropoffDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropoffDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropoffDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
