import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarRentalService } from 'src/app/services/car-rental.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-car-contact-details',
  templateUrl: './car-contact-details.component.html',
  styleUrls: ['./car-contact-details.component.css'],
})
export class CarContactDetailsComponent implements OnInit {
  currentUser = this.token.getUser();
  constructor(
    private carRentalService: CarRentalService,
    private token: TokenStorageService
  ) {}
  contact = {
    firstName: this.currentUser.user.firstname,
    lastName: this.currentUser.user.lastname,
    email: this.currentUser.user.email,
    tel: this.currentUser.user.phonenumber,
  };

  ngOnInit(): void {}

  sendContact() {
    this.carRentalService.setFirstName(this.contact.firstName);
    this.carRentalService.setLastName(this.contact.lastName);
    this.carRentalService.setEmail(this.contact.email);
    this.carRentalService.setTel(this.contact.tel);
  }
}
