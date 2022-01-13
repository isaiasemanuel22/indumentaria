import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LogoComponent } from './common/svg/logo/logo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {defineLordIconElement} from 'lord-icon-element'
import { LottieAnimationViewModule } from 'ng-lottie';
import Lottie from 'lottie-web';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    LottieAnimationViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(){
    defineLordIconElement(Lottie.loadAnimation)
  }
 }
