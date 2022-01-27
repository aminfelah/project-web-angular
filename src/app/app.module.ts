import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HomeNavbarComponent } from './home/components/home-navbar/home-navbar.component';
import { AboutComponent } from './home/components/about/about.component';
import { ReviewsComponent } from './home/components/reviews/reviews.component';
import { ServicesComponent } from './home/components/services/services.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { GettingStartedComponent } from './home/components/getting-started/getting-started.component';
import { HeadComponent } from './shared/components/head/head.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SharedFooterComponent } from './shared/components/shared-footer/shared-footer.component';
import { CarRentalPageComponent } from './car-rental/car-rental-page/car-rental-page.component';
import { CarRentalPickupFormComponent } from './car-rental/components/car-rental-pickup-form/car-rental-pickup-form.component';
import { RentDetailsComponent } from './car-rental/components/rent-details/rent-details.component';
import { ContactDetailsComponent } from './car-rental/components/contact-details/contact-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarsResultComponent } from './car-rental/components/cars-result/cars-result.component';
import { CarCardComponent } from './car-rental/components/car-card/car-card.component';
import { FormsModule } from '@angular/forms';
import { PaymentMethodsComponent } from './car-rental/components/payment-methods/payment-methods.component';
import { ReservationSuccessComponent } from './car-rental/components/reservation-success/reservation-success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeNavbarComponent,
    AboutComponent,
    ReviewsComponent,
    ServicesComponent,
    FooterComponent,
    GettingStartedComponent,
    HeadComponent,
    NavbarComponent,
    SharedFooterComponent,
    CarRentalPageComponent,
    CarRentalPickupFormComponent,
    RentDetailsComponent,
    ContactDetailsComponent,
    CarsResultComponent,
    CarCardComponent,
    PaymentMethodsComponent,
    ReservationSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
