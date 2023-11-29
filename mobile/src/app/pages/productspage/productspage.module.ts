import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductspagePageRoutingModule } from './productspage-routing.module';

import { ProductspagePage } from './productspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductspagePageRoutingModule
  ],
  declarations: [ProductspagePage]
})
export class ProductspagePageModule {}
