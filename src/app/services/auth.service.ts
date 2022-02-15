import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/auth',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  register(
    username: string,
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    residence: string,
    adress: string,
    phonenumber: string,
    dateOfBirth: string,
    selectFile: any
  ): Observable<any> {
    let formData = new FormData();
    let user = {
      username,
      email,
      password,
      firstname,
      lastname,
      residence,
      adress,
      phonenumber,
      dateOfBirth,
    };
    
    formData.append('email',email );
    formData.append('username',username );
    formData.append('phonenumber',phonenumber );
    formData.append('firstname',firstname );
    formData.append('lastname',lastname );
    formData.append('dateOfBirth',dateOfBirth );
    formData.append('residence',residence );
    formData.append('adress',adress );
    formData.append('password',password );
    formData.append('image', selectFile);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        
      },
    };

    
    return this.http.post(AUTH_API + '/users', formData);
  }
}
