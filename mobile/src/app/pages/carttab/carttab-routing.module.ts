import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarttabPage } from './carttab.page';

const routes: Routes = [
  {
    path: '',
    component: CarttabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarttabPageRoutingModule {}
