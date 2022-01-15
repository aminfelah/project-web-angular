import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsReviewsComponent } from './travels-reviews.component';

describe('TravelsReviewsComponent', () => {
  let component: TravelsReviewsComponent;
  let fixture: ComponentFixture<TravelsReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelsReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
