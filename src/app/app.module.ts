import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { HomeComponent } from './core/components/Home/home.component';
import { ServicesComponent } from './core/components/services/services.component';
import { ContactUsCopyComponent } from './core/components/contact-us-copy/contact-us.component';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OurAdvantagesComponent } from './core/components/our-advantages/our-advantages.component';
import { OurLocationComponent } from './core/components/out-location/our-location.component';
import { ContactUsComponent } from './core/components/contact-us/contact-us.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, HeaderComponent, ServicesComponent, ContactUsCopyComponent, OurAdvantagesComponent,
    OurLocationComponent, ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
