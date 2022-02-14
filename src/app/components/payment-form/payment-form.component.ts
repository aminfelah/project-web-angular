import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {


  constructor(private router: Router) { }
  successId(){
    
    this.router.navigate(['/rent/success']);
  }

  ngOnInit(): void {
    
  }

}
