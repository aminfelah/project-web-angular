import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingOrderService {

  private bookingOrderUrl='http://localhost:3000/booking-order/add'

  constructor(private http: HttpClient) { }

  addBookingOrder(details: any): Observable<any> {
    return this.http.post<any>(this.bookingOrderUrl, details)
  }
}
