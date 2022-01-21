import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dropoff-details',
  templateUrl: './dropoff-details.component.html',
  styleUrls: ['./dropoff-details.component.css']
})
export class DropoffDetailsComponent implements OnInit {

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
    this.router.navigate(['/arrival/contact'])
  }
  previous(){
    this.router.navigate(['/arrival/details'])
  }

}
