import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ArrivalOrderService } from 'src/app/services/arrival-order.service';


@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  paymentForm=this.formBuilder.group({
    price: [200],
    paymentMethod: ['',Validators.required]
  })

  constructor(private formBuilder: FormBuilder,
              private router:Router,
              private arrivalService: ArrivalOrderService) { }


  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
  previous(){
    this.router.navigate(['/arrival/contact'])
  }

  onSubmit(){
    this.arrivalService.updatePaymentdetails({
      price: this.paymentForm.controls['price'].value,
      paymentMethod: this.paymentForm.controls['paymentMethod'].value
    })
  }

}
