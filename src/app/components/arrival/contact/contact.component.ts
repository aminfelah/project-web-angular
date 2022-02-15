import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ArrivalOrderService } from 'src/app/services/arrival-order.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  currentUser=this.token.getUser();
  contactForm=this.formBuilder.group({
    firstName: [this.currentUser.user.firstname, Validators.required],
    lastName: [this.currentUser.user.lastname, Validators.required],
    email: [this.currentUser.user.email, Validators.required],
    phoneNumber: [this.currentUser.user.phonenumber, Validators.required]
  });
  constructor(private formBuilder: FormBuilder ,
              private router:Router,
              private arrivalService: ArrivalOrderService,
              private token: TokenStorageService) { }

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
