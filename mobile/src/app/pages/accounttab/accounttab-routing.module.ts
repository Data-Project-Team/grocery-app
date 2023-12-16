import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccounttabPage } from './accounttab.page';

const routes: Routes = [
  {
    path: '',
    component: AccounttabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccounttabPageRoutingModule {}
