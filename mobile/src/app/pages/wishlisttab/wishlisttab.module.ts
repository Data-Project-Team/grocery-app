import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { WishlisttabPageRoutingModule } from './wishlisttab-routing.module';


import { WishlisttabPage } from './wishlisttab.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WishlisttabPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WishlisttabPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WishlisttabPageModule {}
