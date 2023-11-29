import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorytabPageRoutingModule } from './categorytab-routing.module';

import { CategorytabPage } from './categorytab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorytabPageRoutingModule
  ],
  declarations: [CategorytabPage]
})
export class CategorytabPageModule {}
