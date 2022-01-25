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
import { HomeComponent } from './components/home/home.component';
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
    HomeComponent,
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
    PaymentDetailsComponent
    

 
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
