import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarRentalService } from 'src/app/services/car-rental.service';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit {
  creditCard: boolean = false;

  constructor(private carRentalService : CarRentalService) { }

  ngOnInit(): void {
  }

  setCreditCard(value: boolean){
    this.creditCard = value;
  }

  sendPaymentMethod(){
    this.carRentalService.setPayment_method((this.creditCard)? "credit_card": "cash")
  }

}
