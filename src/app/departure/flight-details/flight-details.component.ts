import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

  air=[
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


}
