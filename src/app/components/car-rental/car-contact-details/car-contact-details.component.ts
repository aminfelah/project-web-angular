import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarRentalService } from 'src/app/services/car-rental.service';


@Component({
  selector: 'app-car-contact-details',
  templateUrl: './car-contact-details.component.html',
  styleUrls: ['./car-contact-details.component.css']
})
export class CarContactDetailsComponent implements OnInit {
  contact = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'tel': 0
  }
  constructor(private carRentalService : CarRentalService) { }

  ngOnInit(): void {
  }

  sendContact(){
    this.carRentalService.setFirstName(this.contact.firstName);
    this.carRentalService.setLastName(this.contact.lastName);
    this.carRentalService.setEmail(this.contact.email);
    this.carRentalService.setTel(this.contact.tel);
  }
}
