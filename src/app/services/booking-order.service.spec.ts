import { TestBed } from '@angular/core/testing';

import { BookingOrderService } from './booking-order.service';

describe('BookingOrderService', () => {
  let service: BookingOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
