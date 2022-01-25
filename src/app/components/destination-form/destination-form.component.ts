import { Component, Input, OnInit } from '@angular/core';
import { FlightTicketsService } from 'src/app/services/flight-tickets.service';

@Component({
  selector: 'app-destination-form',
  templateUrl: './destination-form.component.html',
  styleUrls: ['./destination-form.component.css']
})
export class DestinationFormComponent implements OnInit {
  @Input()  dep!: string;
  @Input()  arv!: string;
  @Input()  date!: string;
  constructor(private flightTicketsService:FlightTicketsService) { }
  flightTickets: any;
  beginsearch: boolean= false ;
  ngOnInit(): void {
    
  }

  async submitform():Promise<void>{

     this.beginsearch = true;
     (await this.flightTicketsService.getFlight(this.dep,this.arv,this.date)).subscribe((data) => this.flightTickets=data)
     
   
  }
}
