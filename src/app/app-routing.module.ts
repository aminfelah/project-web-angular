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
import { ContactDetailsComponent } from './components/departure/contact-details/contact-details.component';
import { DepartureComponent } from './components/departure/departure.component';
import { FlightDetailsComponent } from './components/departure/flight-details/flight-details.component';
import { ForfaitsComponent } from './components/departure/forfaits/forfaits.component';
import { PaymentComponent } from './components/departure/payment/payment.component';
import { PickupDetailsComponent } from './components/departure/pickup-details/pickup-details.component';
import { FlightComponent } from './components/flight/flight.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'home', component: FlightComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
