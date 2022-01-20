import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartureComponent } from './departure/departure.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DepartureComponent,
    ArrivalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
