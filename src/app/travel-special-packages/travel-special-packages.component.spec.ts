import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelSpecialPackagesComponent } from './travel-special-packages.component';

describe('TravelSpecialPackagesComponent', () => {
  let component: TravelSpecialPackagesComponent;
  let fixture: ComponentFixture<TravelSpecialPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelSpecialPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelSpecialPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
