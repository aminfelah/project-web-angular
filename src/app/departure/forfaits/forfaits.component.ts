import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { DepartureOrderService } from 'src/app/common/services/departure-order.service';

@Component({
  selector: 'app-forfaits',
  templateUrl: './forfaits.component.html',
  styleUrls: ['./forfaits.component.css'],
})
export class ForfaitsComponent implements OnInit {

  forfaitForm=this.formBuilder.group({
    packageType: ['', Validators.required],
    numberOfBags: ['', Validators.required],
    fastTrack: [false],
    upgrade: [false],
    additionalBags: [false],
  });

  constructor(private formBuilder: FormBuilder,
              private router:Router,
              private departureService: DepartureOrderService) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

  current: boolean []= [ false ,false ,false];

  additional_service=[
    {id:"additionalBags", select:false, name:"Additional bags (if more than 4 bags)" , description:"Have extra bags? Purchase additional bags to your package if you are traveling with more than 4 bags", price:"40"},
    {id:"fastTrack", select:false, name:"Additional fast track pass" , description:"Add fast track service to your DUBZ packages to speed through immigration. Applicable to Baggage Check-in and Baggage Check-in and Sanitization Packages or Plus customers who require more than 4 passes", price:"100"},
    {id:"upgrade", select:false, name:"Upgrade to full meet and greet" , description:"Upgrade your fast track service to include a personalize meet and greet service up to the gate of your aircraft.", price:"80"}
  ];

  numbers: number []=[1,2,3,4,5,6,7,8,9,10];

  /*Selectionner un package */
  select(i:number){
    this.current[i] = !this.current[i]

    if(this.current[i]){
      this.forfaitForm.patchValue({
        packageType: i+1
      });
    }
    for (let j = 0; j < 3; j++) {
      if (j!=i){
        this.current[j] = false;
      }
    }
  }


  next(){
    this.router.navigate(['/departure/flight']);
  }

  onSubmit(){
    this.departureService.updateForfaitDetails({
      packageType: this.forfaitForm.controls['packageType'].value,
      numberOfBags: this.forfaitForm.controls['numberOfBags'].value,
      fastTrack: this.forfaitForm.controls['fastTrack'].value,
      upgrade: this.forfaitForm.controls['upgrade'].value,
      additionalBags: this.forfaitForm.controls['additionalBags'].value
    })
    this.next()
  }

}
