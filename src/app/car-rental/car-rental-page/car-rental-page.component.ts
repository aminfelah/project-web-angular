import { Component, OnInit } from '@angular/core';
import { Reservation } from '../entities/reservation.entity';
import { CarRentalService } from '../services/car-rental.service';

@Component({
  selector: 'app-car-rental-page',
  templateUrl: './car-rental-page.component.html',
  styleUrls: ['./car-rental-page.component.css']
})
export class CarRentalPageComponent implements OnInit {
  public currentPage = 0;

  //  reservation: Reservation = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   tel: 0,
  //   pick_up_date: new Date(),
  //   pick_up_location: "",
  //   nbrDays: 0,
  //   payment_method: "",
  //   car_id: ""  
  // };
  
  isSendDisabled: boolean = false;

  reservation = new Reservation("","","",0,new Date(),"",0,"","");
  constructor(private carRentalService : CarRentalService) { }

  ngOnInit(): void {
  }

  public changePage(index: number): void {
    if(this.currentPage == 0 && index == -1){
      console.log(this.currentPage)
    }else if (this.currentPage == 3 && index == 1){
      console.log(this.currentPage)

    }else{
      this.currentPage += index;
    }
  }

  isSendDisabledInput(isSendDisabled : any){
    this.isSendDisabled = isSendDisabled;
  }


  // addReservation(){
  //   console.log(this.reservation);
  //   this.carRentalService.createReservation(this.reservation)
  //     .subscribe(
  //       res => console.log(res),
  //       err => console.log(err)
  //     );
  //     this.reservation.firstName ="";
  //     this.reservation.lastName ="";
  //     this.reservation.email ="";
  //     this.reservation.tel =0;
  //     this.reservation.pick_up_date = new Date();
  //     this.reservation.pick_up_location ="";
  //     this.reservation.nbrDays = 0;
  //     this.reservation.payment_method ="";
  //     this.reservation.car_id ="";
  // }
}
