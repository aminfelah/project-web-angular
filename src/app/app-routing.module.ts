import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarRentalPageComponent } from './car-rental/car-rental-page/car-rental-page.component';
import { CarRentalPickupFormComponent } from './car-rental/components/car-rental-pickup-form/car-rental-pickup-form.component';
import { CarsResultComponent } from './car-rental/components/cars-result/cars-result.component';
import { ContactDetailsComponent } from './car-rental/components/contact-details/contact-details.component';
import { PaymentMethodsComponent } from './car-rental/components/payment-methods/payment-methods.component';
import { RentDetailsComponent } from './car-rental/components/rent-details/rent-details.component';
import { ReservationSuccessComponent } from './car-rental/components/reservation-success/reservation-success.component';

const routes: Routes =  [
  { path: 'rent', children:[
    { path: '', redirectTo:'/rent/details', pathMatch:'full' },
    // { path: 'pickup', component: CarRentalPickupFormComponent },
    { path: 'details', component: RentDetailsComponent },
    { path: 'contact', component: ContactDetailsComponent },
    { path: 'payment', component: PaymentMethodsComponent },
    { path: 'result', component: CarsResultComponent },
    { path: 'success', component: ReservationSuccessComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
