import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.css']
})
export class DepartureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headers=[
    {id:1, name:"Packages & Services", link:"forfait"},
    {id:2, name:"Flight Details", link:"flight"},
    {id:3, name:"Pick-up Details", link:"pickup"},
    {id:4, name:"Contact Details", link:"contact"},
    {id:5, name:"Payment Details", link:"payment"}
  ]

}
