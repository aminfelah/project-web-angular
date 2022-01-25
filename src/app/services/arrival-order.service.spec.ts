import { TestBed } from '@angular/core/testing';
import { ArrivalOrderService } from './arrival-order.service';



describe('ArrivalOrderService', () => {
  let service: ArrivalOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrivalOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
