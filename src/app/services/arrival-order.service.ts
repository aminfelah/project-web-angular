import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ArrivalDetails } from '../models/arrivalDetails.model';
import { Contact } from '../models/contact.model';
import { Payment } from '../models/payment.model';
import { PickUpOrDropOffDetails } from '../models/pickUpOrDropOffDetails.model';

@Injectable({
  providedIn: 'root'
})
export class ArrivalOrderService {


  private arrivalDetails = new Subject<ArrivalDetails>();
  private dropOffDetails = new Subject<PickUpOrDropOffDetails>();
  private contactDetails = new Subject<Contact>();
  private paymentDetails = new Subject<Payment>();
  constructor() { }

  public getArrivalDetails(): Observable<ArrivalDetails> {
    return this.arrivalDetails.asObservable();
  }

  public updateArrivalDetails(details: ArrivalDetails): void {
    this.arrivalDetails.next(details);
  }

  public getDropOffdetails(): Observable<PickUpOrDropOffDetails> {
    return this.dropOffDetails.asObservable();
  }

  public updateDropOffdetails(details: PickUpOrDropOffDetails): void {
    this.dropOffDetails.next(details);
  }

  public getContactdetails(): Observable<Contact> {
    return this.contactDetails.asObservable();
  }

  public updateContactdetails(details: Contact): void {
    this.contactDetails.next(details);
  }

  public getPaymentdetails(): Observable<Payment> {
    return this.paymentDetails.asObservable();
  }

  public updatePaymentdetails(details: Payment): void {
    this.paymentDetails.next(details);
  }
}
