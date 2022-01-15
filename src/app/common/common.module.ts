import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './svg/logo/logo.component';
import { SliderComponent } from './slider/slider.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    LogoComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule
  ],
  exports:[
    LogoComponent,
    SliderComponent
  ]
})
export class CommonModuleApp { }
