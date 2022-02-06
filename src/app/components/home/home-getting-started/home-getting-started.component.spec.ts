import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGettingStartedComponent } from './home-getting-started.component';

describe('HomeGettingStartedComponent', () => {
  let component: HomeGettingStartedComponent;
  let fixture: ComponentFixture<HomeGettingStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGettingStartedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGettingStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
