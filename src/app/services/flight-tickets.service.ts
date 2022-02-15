import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class FlightTicketsService {
  
  constructor(private http: HttpClient) {}

  async getFlight(dep: string,arv: string,date: string) {
    return this.http.get("http://localhost:5000/"+dep+"/"+arv+"/"+date);
      
  }
}
