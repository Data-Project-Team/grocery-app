import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccounttabPageRoutingModule } from './accounttab-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { AccounttabPage } from './accounttab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccounttabPageRoutingModule,
    ComponentsModule
  ] , 
  declarations: [AccounttabPage]
})
export class AccounttabPageModule {}
