import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrucksComponent } from './components/trucks/trucks.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { DriversComponent } from './components/drivers/drivers.component';
import { GaragesComponent } from './components/garages/garages.component';
import { DeliveriesComponent } from './components/deliveries/deliveries.component';
import {ErrorInterceptor} from "./components/errors/ErrorInterceptor";
import {ErrorHandler} from "./components/errors/ErrorHandler";

@NgModule({
  declarations: [
    AppComponent,
    TrucksComponent,
    DriversComponent,
    GaragesComponent,
    DeliveriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    ErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
