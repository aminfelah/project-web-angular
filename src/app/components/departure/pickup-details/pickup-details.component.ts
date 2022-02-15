import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { DepartureOrderService } from 'src/app/services/departure-order.service';


@Component({
  selector: 'app-pickup-details',
  templateUrl: './pickup-details.component.html',
  styleUrls: ['./pickup-details.component.css']
})
export class PickupDetailsComponent implements OnInit {


  pickUpDetailForm=this.formBuilder.group({
    address: ['', Validators.required],
    datePickUpOrDropOff: ['', Validators.required],
    timePickUpOrDropOff: ['', Validators.required],
    comment: ['', Validators.required]
  });


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

  next(){
    this.router.navigate(['/departure/contact'])
  }
  previous(){
    this.router.navigate(['/departure/flight'])
  }

  onSubmit(){
    this.departureService.updatePickUpdetails({
      address: this.pickUpDetailForm.controls['address'].value,
      datePickUpOrDropOff: this.pickUpDetailForm.controls['datePickUpOrDropOff'].value,
      timePickUpOrDropOff: this.pickUpDetailForm.controls['timePickUpOrDropOff'].value,
      comment: this.pickUpDetailForm.controls['comment'].value,
    })
    this.next()
  }

}
