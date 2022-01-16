import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HomeNavbarComponent } from './home/components/home-navbar/home-navbar.component';
import { AboutComponent } from './home/components/about/about.component';
import { ReviewsComponent } from './home/components/reviews/reviews.component';
import { ServicesComponent } from './home/components/services/services.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { GettingStartedComponent } from './home/components/getting-started/getting-started.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeNavbarComponent,
    AboutComponent,
    ReviewsComponent,
    ServicesComponent,
    FooterComponent,
    GettingStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
