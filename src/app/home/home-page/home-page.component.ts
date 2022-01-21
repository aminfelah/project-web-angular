import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  id!: string;
  constructor() { }

  ngOnInit(): void {
  }

  showId(id: any){
    this.id = id;
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    if(el != null){
      el.scrollIntoView();
    }
  }
}
