import { Component, OnInit,HostListener } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    if ( location.pathname!="/home" ) {
      this.backgroundpresent="navbar-background"
    } else {
      this.backgroundpresent=""
    }
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.user.username;
    }
  }

  backgroundpresent:string=""
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.header-area') as HTMLElement;
    if (window.pageYOffset > element.clientHeight || location.pathname!="/home" ) {
      this.backgroundpresent="navbar-background"
    } else {
      this.backgroundpresent=""
    }
  }

  
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
