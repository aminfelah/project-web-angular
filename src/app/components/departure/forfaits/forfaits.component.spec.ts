import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitsComponent } from './forfaits.component';

describe('ForfaitsComponent', () => {
  let component: ForfaitsComponent;
  let fixture: ComponentFixture<ForfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
