import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrivalDetailsComponent } from './components/arrival/arrival-details/arrival-details.component';
import { ArrivalComponent } from './components/arrival/arrival.component';
import { ContactComponent } from './components/arrival/contact/contact.component';
import { DropoffDetailsComponent } from './components/arrival/dropoff-details/dropoff-details.component';
import { PaymentDetailsComponent } from './components/arrival/payment-details/payment-details.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { CarContactDetailsComponent } from './components/car-rental/car-contact-details/car-contact-details.component';
import { CarRentalPageComponent } from './components/car-rental/car-rental-page/car-rental-page.component';

import { CarsResultComponent } from './components/car-rental/cars-result/cars-result.component';
import { PaymentMethodsComponent } from './components/car-rental/payment-methods/payment-methods.component';
import { RentDetailsComponent } from './components/car-rental/rent-details/rent-details.component';
import { ReservationSuccessComponent } from './components/car-rental/reservation-success/reservation-success.component';
import { ContactDetailsComponent } from './components/departure/contact-details/contact-details.component';
import { DepartureComponent } from './components/departure/departure.component';
import { FlightDetailsComponent } from './components/departure/flight-details/flight-details.component';
import { ForfaitsComponent } from './components/departure/forfaits/forfaits.component';
import { PaymentComponent } from './components/departure/payment/payment.component';
import { PickupDetailsComponent } from './components/departure/pickup-details/pickup-details.component';
import { FlightComponent } from './components/flight/flight.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';

import { LoginComponent } from './components/login/login.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'payment', component: PaymentFormComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'flight', component: FlightComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'departure',
    component: DepartureComponent,
    children: [
      { path: '', redirectTo: '/departure/forfait', pathMatch: 'full' },
      { path: 'forfait', component: ForfaitsComponent },
      { path: 'flight', component: FlightDetailsComponent },
      { path: 'pickup', component: PickupDetailsComponent },
      { path: 'contact', component: ContactDetailsComponent },
      { path: 'payment', component: PaymentComponent },
    ],
  },
  {
    path: 'arrival',
    component: ArrivalComponent,
    children: [
      { path: '', redirectTo: '/arrival/details', pathMatch: 'full' },
      { path: 'details', component: ArrivalDetailsComponent },
      { path: 'dropoff', component: DropoffDetailsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'payment', component: PaymentDetailsComponent },
    ],
  },
  {
    path: 'rent',
    component: CarRentalPageComponent,
    children: [
      { path: '', redirectTo: '/rent/details', pathMatch: 'full' },
      { path: 'details', component: RentDetailsComponent },
      { path: 'contact', component: CarContactDetailsComponent },
      { path: 'payment', component: PaymentMethodsComponent },
      { path: 'result', component: CarsResultComponent },
      { path: 'payment-card', component: PaymentFormComponent },
      { path: 'success', component: ReservationSuccessComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
