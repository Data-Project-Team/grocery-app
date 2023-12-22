import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DetailspagePageRoutingModule } from './detailspage-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { DetailspagePage } from './detailspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailspagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetailspagePage]
})
export class DetailspagePageModule {}
