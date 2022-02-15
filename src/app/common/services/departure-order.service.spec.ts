import { TestBed } from '@angular/core/testing';

import { DepartureOrderService } from './departure-order.service';

describe('DepartureOrderService', () => {
  let service: DepartureOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartureOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
