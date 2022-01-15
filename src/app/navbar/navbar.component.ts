import { Component, OnInit,HostListener } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  backgroundpresent:string=""
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.header-area') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      this.backgroundpresent="navbar-background"
    } else {
      this.backgroundpresent=""
    }
  }

  ngOnInit(): void {
  }

}
