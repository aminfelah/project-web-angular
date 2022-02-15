import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ArrivalOrderService } from 'src/app/services/arrival-order.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm=this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required]
  });
  constructor(private formBuilder: FormBuilder ,
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

  onSubmit(){
    this.arrivalService.updateContactdetails({
      firstName: this.contactForm.controls['firstName'].value,
      lastName: this.contactForm.controls['lastName'].value,
      email: this.contactForm.controls['email'].value,
      phoneNumber: this.contactForm.controls['phoneNumber'].value
    })
    this.router.navigate(['/arrival/payment'])
  }
  previous(){
    this.router.navigate(['/arrival/dropoff'])
  }

}
