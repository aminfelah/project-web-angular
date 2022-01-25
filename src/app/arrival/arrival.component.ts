import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArrivalDetails } from '../common/models/arrivalDetails.model';
import { Contact } from '../common/models/contact.model';
import { Payment } from '../common/models/payment.model';
import { PickUpOrDropOffDetails } from '../common/models/pickUpOrDropOffDetails.model';
import { ArrivalOrderService } from '../common/services/arrival-order.service';
import { BookingOrderService } from '../common/services/booking-order.service';

@Component({
  selector: 'app-arrival',
  templateUrl: './arrival.component.html',
  styleUrls: ['./arrival.component.css']
})
export class ArrivalComponent implements OnInit {


  private arrivalDetails! :ArrivalDetails;
  private dropOffDetails!: PickUpOrDropOffDetails;
  private contactDetails! : Contact;
  private paymentDetails! : Payment;

  public arrivalDetailsSubscription!: Subscription;
  public dropOffDetailsSubscription!: Subscription;
  public contactDetailsSubscription!: Subscription;
  public paymentDetailsSubscription!: Subscription;
  constructor(private arrivalService: ArrivalOrderService,
              private bookingOrderService: BookingOrderService) { }

  ngOnInit(): void {
    this.arrivalDetailsSubscription = this.arrivalService.getArrivalDetails().subscribe(details => this.arrivalDetails = details);
    this.dropOffDetailsSubscription = this.arrivalService.getDropOffdetails().subscribe(details => this.dropOffDetails = details);
    this.contactDetailsSubscription = this.arrivalService.getContactdetails().subscribe(details => this.contactDetails = details);
    this.paymentDetailsSubscription = this.arrivalService.getPaymentdetails().subscribe(
      details => {this.paymentDetails = details;
                this.sendData()
              });
  }

  headers=[
    {id:1, name:"Arrival Details", link:"details"},
    {id:2, name:"Drop-off Details", link:"dropoff"},
    {id:3, name:"Contact Details", link:"contact"},
    {id:4, name:"Payment Details", link:"payment"}
  ]

  sendData(){
    const data={serviceType: 'arrival',
                ...this.arrivalDetails,
                ...this.dropOffDetails,
                ...this.contactDetails,
                ...this.paymentDetails
              }

    this.bookingOrderService.addBookingOrder(data).subscribe(Message => {});
  }

}
