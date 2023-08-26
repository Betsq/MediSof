import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { HomeComponent } from './core/components/Home/home.component';
import { ServicesComponent } from './core/components/services/services.component';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OurAdvantagesComponent } from './core/components/our-advantages/our-advantages.component';
import { ContactUsComponent } from './core/components/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRippleModule} from '@angular/material/core';
import { MainServicesComponent } from './core/components/main-services/main-services.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import { ContactUsFormComponent } from './core/components/contact-us-form/contact-us-form.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ContactUsPopUpComponent } from './core/components/contact-us-pop-up/contact-us-pop-up.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DirectivesModule } from './directives/swiper.module';
import { InformationUsSectionComponent } from './core/components/information-us-section/information-us-section.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contacts', component: ContactUsComponent}
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, HeaderComponent, ServicesComponent, OurAdvantagesComponent,
    ContactUsComponent, MainServicesComponent, ContactUsPopUpComponent,
    ContactUsFormComponent, InformationUsSectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    SlickCarouselModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { 
  
}
