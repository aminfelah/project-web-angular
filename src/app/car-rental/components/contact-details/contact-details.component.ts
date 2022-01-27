import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarRentalService } from '../../services/car-rental.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
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
