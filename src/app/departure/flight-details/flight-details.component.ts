import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { DepartureOrderService } from 'src/app/common/services/departure-order.service';
import { DepartureComponent } from '../departure.component';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  flightDetailsForm=this.formBuilder.group({
    destination: ['', Validators.required],
    dateFlight: ['', Validators.required],
    timeFlight: ['', Validators.required],
    airline: ['', Validators.required]
  });


  constructor(private formBuilder: FormBuilder,
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

  airlines=[
    {id:1, nom:"Tunisair", photo:"Tunisair.png"},
    {id:2, nom:"SAUDIA", photo:"saudia-airlines.png"},
    {id:3, nom:"flydubai", photo:"flydubai.png"},
    {id:4, nom:"Kuwait Airways", photo:"kywaitairways.png"},
    {id:5, nom:"Emirates", photo:"EK.png"},
    {id:6, nom:"Etihad Airways", photo:"etihad-airways.png"}
  ];

  next(){
    this.router.navigate(['/departure/pickup'])
  }
  previous(){
    this.router.navigate(['/departure/forfait'])
  }

  onSubmit(){
    this.departureService.updateFlightdetails({
      destination: this.flightDetailsForm.controls['destination'].value,
      dateFlight: this.flightDetailsForm.controls['dateFlight'].value,
      timeFlight: this.flightDetailsForm.controls['timeFlight'].value,
      airline: this.flightDetailsForm.controls['airline'].value
    })
    this.next();
  }


}
