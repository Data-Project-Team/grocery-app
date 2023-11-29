import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishlisttabPage } from './wishlisttab.page';

const routes: Routes = [
  {
    path: '',
    component: WishlisttabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishlisttabPageRoutingModule {}
