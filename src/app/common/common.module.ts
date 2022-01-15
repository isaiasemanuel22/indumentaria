import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './svg/logo/logo.component';
import { SliderComponent } from './slider/slider.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CategoriesComponent } from './product/categories/categories.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    LogoComponent,
    SliderComponent,
    ProductListComponent,
    CategoriesComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule
  ],
  exports:[
    LogoComponent,
    SliderComponent,
    ProductComponent
  ]
})
export class CommonModuleApp { }
