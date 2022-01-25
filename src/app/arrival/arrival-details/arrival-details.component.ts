import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ArrivalOrderService } from 'src/app/common/services/arrival-order.service';

@Component({
  selector: 'app-arrival-details',
  templateUrl: './arrival-details.component.html',
  styleUrls: ['./arrival-details.component.css']
})
export class ArrivalDetailsComponent implements OnInit {

  arrivalDetailsForm=this.formBuilder.group({
    airline: ['',Validators.required],
    arrivalDate:['',Validators.required],
    arrivalTime:['',Validators.required],
    comment: ['',Validators.required]
  })

  constructor(private formBuilder: FormBuilder,
              private router:Router,
              private arrivalService: ArrivalOrderService) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  }

  onSubmit(){
    this.arrivalService.updateArrivalDetails({
      airline: this.arrivalDetailsForm.controls['airline'].value,
      arrivalDate: this.arrivalDetailsForm.controls['arrivalDate'].value,
      arrivalTime: this.arrivalDetailsForm.controls['arrivalTime'].value,
      comment: this.arrivalDetailsForm.controls['comment'].value
    })
    this.router.navigate(['/arrival/dropoff'])
  }

}
