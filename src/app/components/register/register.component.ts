import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    firstname: null,
    lastname: null,
    residence: null,
    adress: null,
    phonenumber: null,
    email: null,
    password: null,
    dateOfBirth: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  selectedFile: any;
 
  imageSrc: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  selectFile(event: any): void {
    this.selectedFile = event.target.files[0];
    this.imageSrc = URL.createObjectURL(event.target.files[0]);
  }
  onSubmit(): void {
    const {
      username,
      email,
      password,
      firstname,
      lastname,
      residence,
      adress,
      phonenumber,
      dateOfBirth,
    } = this.form;

    this.authService
      .register(
        username,
        email,
        password,
        firstname,
        lastname,
        residence,
        adress,
        phonenumber,
        dateOfBirth,
        this.selectedFile
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        (err) => {
          this.errorMessage = err.error.text;
          this.isSignUpFailed = true;
        }
      );
  }
}
