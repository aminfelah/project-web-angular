import { TestBed } from '@angular/core/testing';

import { FlightTicketsService } from './flight-tickets.service';

describe('FlightTicketsService', () => {
  let service: FlightTicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightTicketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
