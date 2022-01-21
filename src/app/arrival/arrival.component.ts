import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrival',
  templateUrl: './arrival.component.html',
  styleUrls: ['./arrival.component.css']
})
export class ArrivalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headers=[
    {id:1, name:"Arrival Details", link:"details"},
    {id:2, name:"Drop-off Details", link:"dropoff"},
    {id:3, name:"Contact Details", link:"contact"},
    {id:4, name:"Payment Details", link:"payment"}
  ]

}
