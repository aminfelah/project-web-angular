import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelSpecialOfferComponent } from './travel-special-offer.component';

describe('TravelSpecialOfferComponent', () => {
  let component: TravelSpecialOfferComponent;
  let fixture: ComponentFixture<TravelSpecialOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelSpecialOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelSpecialOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
