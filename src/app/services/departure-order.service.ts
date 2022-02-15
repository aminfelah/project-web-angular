import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contact } from '../models/contact.model';
import { FlightDetails } from '../models/filghtDetails.model';
import { Forfait } from '../models/forfait.model';
import { Payment } from '../models/payment.model';
import { PickUpOrDropOffDetails } from '../models/pickUpOrDropOffDetails.model';

@Injectable({
  providedIn: 'root'
})
export class DepartureOrderService {

  private forfaitDetails = new Subject<Forfait>();
  private flightDeails = new Subject<FlightDetails>();
  private pickUpDeails = new Subject<PickUpOrDropOffDetails>();
  private contactDetails = new Subject<Contact>();
  private paymentdetails = new Subject<Payment>();
  constructor() { }

  public getForfaitDetails(): Observable<Forfait> {
    return this.forfaitDetails.asObservable();
  }

  public updateForfaitDetails(details: Forfait): void {
    this.forfaitDetails.next(details);
  }

  public getFlightdetails(): Observable<FlightDetails> {
    return this.flightDeails.asObservable();
  }

  public updateFlightdetails(details: FlightDetails): void {
    this.flightDeails.next(details);
  }

  public getPickUpdetails(): Observable<PickUpOrDropOffDetails> {
    return this.pickUpDeails.asObservable();
  }

  public updatePickUpdetails(details: PickUpOrDropOffDetails): void {
    this.pickUpDeails.next(details);
  }

  public getContactdetails(): Observable<Contact> {
    return this.contactDetails.asObservable();
  }

  public updateContactdetails(details: Contact): void {
    this.contactDetails.next(details);
  }

  public getPaymentdetails(): Observable<Payment> {
    return this.paymentdetails.asObservable();
  }

  public updatePaymentdetails(details: Payment): void {
    this.paymentdetails.next(details);
  }
}
