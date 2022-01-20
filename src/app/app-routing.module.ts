import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule,ForfaitsComponent],
  declarations:[ForfaitsComponent]
})
export class AppRoutingModule { }
