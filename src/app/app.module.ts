import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFreelancersComponent } from './list-freelancers/list-freelancers.component';
import {HttpClientModule} from "@angular/common/http";
import { DetailFreelancerComponent } from './detail-freelancer/detail-freelancer.component';
import { AddFreelancerComponent } from './add-freelancer/add-freelancer.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListFreelancersComponent,
    DetailFreelancerComponent,
    AddFreelancerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
