import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ArrivalOrderService } from 'src/app/services/arrival-order.service';


@Component({
  selector: 'app-dropoff-details',
  templateUrl: './dropoff-details.component.html',
  styleUrls: ['./dropoff-details.component.css']
})
export class DropoffDetailsComponent implements OnInit {

  droppOffDetailsForm=this.formBuilder.group({
    adress: ['',Validators.required],
    dropOffDate:['',Validators.required],
    dropOffTime:['',Validators.required],
    dropOffComment:['',Validators.required],
  })
  constructor(private formBuilder:FormBuilder,
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

  previous(){
    this.router.navigate(['/arrival/details'])
  }

  onSubmit(){
    this.arrivalService.updateDropOffdetails({
      address: this.droppOffDetailsForm.controls['adress'].value,
      datePickUpOrDropOff: this.droppOffDetailsForm.controls['dropOffDate'].value,
      timePickUpOrDropOff: this.droppOffDetailsForm.controls['dropOffTime'].value,
      comment: this.droppOffDetailsForm.controls['dropOffComment'].value,
    })
    this.router.navigate(['/arrival/contact'])
  }

}
