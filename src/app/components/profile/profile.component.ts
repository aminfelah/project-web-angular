import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  http: any;
  fileInfos: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser)

    this.fileInfos = this.showFile();
    console.log(this.fileInfos)

  }
  showFile():string{
    return "http://localhost:3000/users/showpic/"+this.currentUser.user.profilepic
  }
 
}