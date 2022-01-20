import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-pickup-details',
  templateUrl: './pickup-details.component.html',
  styleUrls: ['./pickup-details.component.css']
})
export class PickupDetailsComponent implements OnInit {

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
    this.router.navigate(['/departure/contact'])
  }
  previous(){
    this.router.navigate(['/departure/flight'])
  }

}
