import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarttabPageRoutingModule } from './carttab-routing.module';

import { CarttabPage } from './carttab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarttabPageRoutingModule
  ],
  declarations: [CarttabPage]
})
export class CarttabPageModule {}
