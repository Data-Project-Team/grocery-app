import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WishlisttabPageRoutingModule } from './wishlisttab-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { WishlisttabPage } from './wishlisttab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WishlisttabPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WishlisttabPage],
})
export class WishlisttabPageModule {}
