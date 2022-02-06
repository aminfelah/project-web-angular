import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServicesComponent } from './home-services.component';

describe('HomeServicesComponent', () => {
  let component: HomeServicesComponent;
  let fixture: ComponentFixture<HomeServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
