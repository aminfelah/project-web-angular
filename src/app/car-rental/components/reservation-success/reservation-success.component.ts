import { Component, OnInit } from '@angular/core';
import { CarRentalService } from '../../services/car-rental.service';

@Component({
  selector: 'app-reservation-success',
  templateUrl: './reservation-success.component.html',
  styleUrls: ['./reservation-success.component.css']
})
export class ReservationSuccessComponent implements OnInit {
  spinning: boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {this.spinning = false}, 3000);
  }

}
