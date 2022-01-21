import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrivalDetailsComponent } from './arrival/arrival-details/arrival-details.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { ContactComponent } from './arrival/contact/contact.component';
import { DropoffDetailsComponent } from './arrival/dropoff-details/dropoff-details.component';
import { PaymentDetailsComponent } from './arrival/payment-details/payment-details.component';
import { ContactDetailsComponent } from './departure/contact-details/contact-details.component';
import { DepartureComponent } from './departure/departure.component';
import { FlightDetailsComponent } from './departure/flight-details/flight-details.component';
import { ForfaitsComponent } from './departure/forfaits/forfaits.component';
import { PaymentComponent } from './departure/payment/payment.component';
import { PickupDetailsComponent } from './departure/pickup-details/pickup-details.component';

const routes: Routes = [
  { path: 'departure', component: DepartureComponent, children:[
    { path: '', redirectTo:'/departure/forfait', pathMatch:'full' },
    { path: 'forfait', component: ForfaitsComponent },
    { path: 'flight', component: FlightDetailsComponent },
    { path: 'pickup', component: PickupDetailsComponent },
    { path: 'contact', component: ContactDetailsComponent },
    { path: 'payment', component: PaymentComponent }
  ]},
  { path: 'arrival', component: ArrivalComponent, children:[
    { path: '', redirectTo:'/arrival/details', pathMatch:'full' },
    { path: 'details', component: ArrivalDetailsComponent },
    { path: 'dropoff', component: DropoffDetailsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'payment', component: PaymentDetailsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule,ForfaitsComponent],
  declarations:[ForfaitsComponent]
})
export class AppRoutingModule { }
