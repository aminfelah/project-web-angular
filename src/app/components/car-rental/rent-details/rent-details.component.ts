import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarRentalService } from 'src/app/services/car-rental.service';

@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.component.html',
  styleUrls: ['./rent-details.component.css']
})
export class RentDetailsComponent implements OnInit {
  nbrDays :number = 0;

  constructor(private carRentalService : CarRentalService) { }

  ngOnInit(): void {
  }

  sendNbrDays(){
    this.carRentalService.setNbrDays(this.nbrDays);
  }
}
