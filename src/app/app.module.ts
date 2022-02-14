import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './components/flight/flight.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { DestinationFormComponent } from './components/destination-form/destination-form.component';
import { TravelServicesComponent } from './components/travel-services/travel-services.component';
import { TravelGalleryComponent } from './components/travel-gallery/travel-gallery.component';
import { TravelDiscountComponent } from './components/travel-discount/travel-discount.component';
import { TravelSpecialPackagesComponent } from './components/travel-special-packages/travel-special-packages.component';
import { TravelsReviewsComponent } from './components/travels-reviews/travels-reviews.component';
import { TravelSpecialOfferComponent } from './components/travel-special-offer/travel-special-offer.component';
import { TravelBlogComponent } from './components/travel-blog/travel-blog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';

import { ProfileComponent } from './components/profile/profile.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { SanitizerUrlPipe } from './sanitizer-url.pipe';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { FlightTicketsService } from './services/flight-tickets.service';
import { DepartureComponent } from './components/departure/departure.component';
import { ArrivalComponent } from './components/arrival/arrival.component';
import { ForfaitsComponent } from './components/departure/forfaits/forfaits.component';
import { FlightDetailsComponent } from './components/departure/flight-details/flight-details.component';
import { PickupDetailsComponent } from './components/departure/pickup-details/pickup-details.component';
import { PaymentComponent } from './components/departure/payment/payment.component';
import { ContactDetailsComponent } from './components/departure/contact-details/contact-details.component';
import { ArrivalDetailsComponent } from './components/arrival/arrival-details/arrival-details.component';
import { ContactComponent } from './components/arrival/contact/contact.component';
import { DropoffDetailsComponent } from './components/arrival/dropoff-details/dropoff-details.component';
import { PaymentDetailsComponent } from './components/arrival/payment-details/payment-details.component';
import { CommonModule } from '@angular/common';
import { HeadSharedComponent } from './components/shared/head-shared/head-shared.component';
import { NavbarSharedComponent } from './components/shared/navbar-shared/navbar-shared.component';
import { FooterSharedComponent } from './components/shared/footer-shared/footer-shared.component';
import { HomeAboutComponent } from './components/home/home-about/home-about.component';
import { HomeGettingStartedComponent } from './components/home/home-getting-started/home-getting-started.component';
import { HomeFooterComponent } from './components/home/home-footer/home-footer.component';
import { HomeNavbarComponent } from './components/home/home-navbar/home-navbar.component';
import { HomeServicesComponent } from './components/home/home-services/home-services.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { HomeReviewsComponent } from './components/home/home-reviews/home-reviews.component';
import { CarRentalPageComponent } from './components/car-rental/car-rental-page/car-rental-page.component';
import { CarRentalPickupFormComponent } from './components/car-rental/car-rental-pickup-form/car-rental-pickup-form.component';
import { CarCardComponent } from './components/car-rental/car-card/car-card.component';
import { CarsResultComponent } from './components/car-rental/cars-result/cars-result.component';
import { RentDetailsComponent } from './components/car-rental/rent-details/rent-details.component';
import { PaymentMethodsComponent } from './components/car-rental/payment-methods/payment-methods.component';
import { ReservationSuccessComponent } from './components/car-rental/reservation-success/reservation-success.component';
import { CarContactDetailsComponent } from './components/car-rental/car-contact-details/car-contact-details.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';






@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    NavbarComponent,
    BannerComponent,
    DestinationFormComponent,
    TravelServicesComponent,
    TravelGalleryComponent,
    TravelDiscountComponent,
    TravelSpecialPackagesComponent,
    TravelsReviewsComponent,
    TravelSpecialOfferComponent,
    TravelBlogComponent,
    ContactUsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
  
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    SanitizerUrlPipe,
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
    PaymentDetailsComponent,
    HeadSharedComponent,
    NavbarSharedComponent,
    FooterSharedComponent,
    HomeAboutComponent,
    HomeGettingStartedComponent,
    HomeFooterComponent,
    HomeNavbarComponent,
    HomeServicesComponent,
    HomePageComponent,
    HomeReviewsComponent,
    CarRentalPageComponent,
    CarRentalPickupFormComponent,
    CarsResultComponent,
    CarCardComponent,
    RentDetailsComponent,
    CarContactDetailsComponent,
    PaymentMethodsComponent,
    ReservationSuccessComponent,
    PaymentFormComponent
    
    

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
