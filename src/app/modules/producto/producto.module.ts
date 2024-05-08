import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { PagesComponent } from './pages/pages.component';
import { KitComponent } from './pages/kit/kit.component';


@NgModule({
  declarations: [
    PagesComponent,
    KitComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
