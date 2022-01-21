import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-arrival-details',
  templateUrl: './arrival-details.component.html',
  styleUrls: ['./arrival-details.component.css']
})
export class ArrivalDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  }

  next(){
    this.router.navigate(['/arrival/dropoff'])
  }

}
