import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductspagePageRoutingModule } from './productspage-routing.module';

import { ProductspagePage } from './productspage.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ProductspagePageRoutingModule
  ],
  declarations: [ProductspagePage]
})
export class ProductspagePageModule {}
