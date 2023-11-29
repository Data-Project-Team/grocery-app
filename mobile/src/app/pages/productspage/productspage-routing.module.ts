import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductspagePage } from './productspage.page';

const routes: Routes = [
  {
    path: '',
    component: ProductspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductspagePageRoutingModule {}
