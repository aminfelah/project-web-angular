import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartureComponent } from './departure/departure.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlightDetailsComponent } from './departure/flight-details/flight-details.component';
import { ForfaitsComponent } from './departure/forfaits/forfaits.component';
import { PaymentComponent } from './departure/payment/payment.component';
import { PickupDetailsComponent } from './departure/pickup-details/pickup-details.component';
import { ContactDetailsComponent } from './departure/contact-details/contact-details.component';
import { ArrivalDetailsComponent } from './arrival/arrival-details/arrival-details.component';
import { ContactComponent } from './arrival/contact/contact.component';
import { DropoffDetailsComponent } from './arrival/dropoff-details/dropoff-details.component';
import { PaymentDetailsComponent } from './arrival/payment-details/payment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartureComponent,
    ArrivalComponent,
    ForfaitsComponent,
    FlightDetailsComponent,
    PickupDetailsComponent,
    PaymentComponent,
    ContactDetailsComponent,
    ArrivalDetailsComponent,
    ContactComponent,
    DropoffDetailsComponent,
    PaymentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
