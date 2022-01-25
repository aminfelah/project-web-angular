import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { DepartureOrderService } from 'src/app/common/services/departure-order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm=this.formBuilder.group({
    price: [200],
    paymentMethod: ['',Validators.required]
  })

  constructor(private formBuilder: FormBuilder,
              private router:Router,
              private departureService: DepartureOrderService) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
  previous(){
    this.router.navigate(['/departure/contact'])
  }

  onSubmit(){
    this.departureService.updatePaymentdetails({
      price: this.paymentForm.controls['price'].value,
      paymentMethod: this.paymentForm.controls['paymentMethod'].value
    })
  }

}
