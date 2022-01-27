import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarRentalService } from '../../services/car-rental.service';

@Component({
  selector: 'app-car-rental-pickup-form',
  templateUrl: './car-rental-pickup-form.component.html',
  styleUrls: ['./car-rental-pickup-form.component.css']
})
export class CarRentalPickupFormComponent implements OnInit {

  @Output()
  isSendDisabledEmitter = new EventEmitter<boolean>();

  isSendDisabled: boolean = false;

  pickup = {
    'pick_up_location': '',
    'pick_up_date': new Date()
  }

  constructor(private carRentalService : CarRentalService) { }

  ngOnInit(): void {
  }

  sendPickup(){
    this.carRentalService.setPick_up_location(this.pickup.pick_up_location);
    this.carRentalService.setPick_up_date(this.pickup.pick_up_date);
    this.isSendDisabled = true;
    this.isSendDisabledEmitter.emit(this.isSendDisabled);
  }
}
