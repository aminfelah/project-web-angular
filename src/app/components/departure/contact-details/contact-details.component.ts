import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { DepartureOrderService } from 'src/app/services/departure-order.service';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {


  contactForm=this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required]
  });
  constructor(private formBuilder:FormBuilder,
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
    this.router.navigate(['/departure/payment'])
  }
  previous(){
    this.router.navigate(['/departure/pickup'])
  }

  onSubmit(){
    this.departureService.updateContactdetails({
      firstName: this.contactForm.controls['firstName'].value,
      lastName: this.contactForm.controls['lastName'].value,
      email: this.contactForm.controls['email'].value,
      phoneNumber: this.contactForm.controls['phoneNumber'].value
    })
    this.next();
  }

}
