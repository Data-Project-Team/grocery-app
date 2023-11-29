import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WishlisttabPageRoutingModule } from './wishlisttab-routing.module';

import { WishlisttabPage } from './wishlisttab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WishlisttabPageRoutingModule
  ],
  declarations: [WishlisttabPage]
})
export class WishlisttabPageModule {}
