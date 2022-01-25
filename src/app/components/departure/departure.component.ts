import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, Subscription, throwError } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { FlightDetails } from 'src/app/models/filghtDetails.model';
import { Forfait } from 'src/app/models/forfait.model';
import { Payment } from 'src/app/models/payment.model';
import { PickUpOrDropOffDetails } from 'src/app/models/pickUpOrDropOffDetails.model';
import { BookingOrderService } from 'src/app/services/booking-order.service';
import { DepartureOrderService } from 'src/app/services/departure-order.service';

@Component({
  selector: 'app-departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.css']
})
export class DepartureComponent implements OnInit {

  private forfaitDetails! :Forfait;
  private flightDetails!: FlightDetails;
  private pickUpDetails!: PickUpOrDropOffDetails;
  private contactDetails! : Contact;
  private paymentDetails! : Payment;

  public forfaitDetailsSubscription!: Subscription;
  public flightDetailsSubscription!: Subscription;
  public pickUpDetailsSubscription!: Subscription;
  public contactDetailsSubscription!: Subscription;
  public paymentDetailsSubscription!: Subscription;

  constructor(private departureService: DepartureOrderService,
              private bookingOrderService: BookingOrderService
    ) { }


  ngOnInit(): void {
    this.forfaitDetailsSubscription = this.departureService.getForfaitDetails().subscribe(details => this.forfaitDetails = details);
    this.flightDetailsSubscription = this.departureService.getFlightdetails().subscribe(details => this.flightDetails = details);
    this.pickUpDetailsSubscription = this.departureService.getPickUpdetails().subscribe(details => this.pickUpDetails = details);
    this.contactDetailsSubscription = this.departureService.getContactdetails().subscribe(details => this.contactDetails = details);
    this.paymentDetailsSubscription = this.departureService.getPaymentdetails().subscribe(
      details => {this.paymentDetails = details;
                this.sendData()
              });
  }

  headers=[
    {id:1, name:"Packages & Services", link:"forfait"},
    {id:2, name:"Flight Details", link:"flight"},
    {id:3, name:"Pick-up Details", link:"pickup"},
    {id:4, name:"Contact Details", link:"contact"},
    {id:5, name:"Payment Details", link:"payment"}
  ]


  sendData(){
    const data={serviceType: 'departure',
                ...this.forfaitDetails,
                ...this.flightDetails,
                ...this.pickUpDetails,
                ...this.contactDetails,
                ...this.paymentDetails
              }

    this.bookingOrderService.addBookingOrder(data).subscribe(Message => {});
  }
}
