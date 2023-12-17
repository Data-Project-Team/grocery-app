import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HometabPageRoutingModule } from './hometab-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CartPage } from '../cart/cart.page';
import { HometabPage } from './hometab.page';
import { CartPageModule } from '../cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HometabPageRoutingModule,
    ComponentsModule,
    CartPageModule
  ],
  declarations: [HometabPage], 
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HometabPageModule {}