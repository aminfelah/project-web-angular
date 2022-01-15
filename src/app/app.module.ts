import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { DestinationFormComponent } from './destination-form/destination-form.component';

import { TravelServicesComponent } from './travel-services/travel-services.component';
import { TravelGalleryComponent } from './travel-gallery/travel-gallery.component';
import { TravelDiscountComponent } from './travel-discount/travel-discount.component';
import { TravelSpecialPackagesComponent } from './travel-special-packages/travel-special-packages.component';
import { TravelsReviewsComponent } from './travels-reviews/travels-reviews.component';
import { TravelSpecialOfferComponent } from './travel-special-offer/travel-special-offer.component';
import { TravelBlogComponent } from './travel-blog/travel-blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
