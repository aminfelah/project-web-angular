import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {

   
  @Output() idToEmit = new EventEmitter<string>();

  id: string = 'home';
  
  constructor() { }

  ngOnInit(): void {
  }

  navbarClicked(id: string){
    this.id = id;
    this.idToEmit.emit(id);
  }

}
