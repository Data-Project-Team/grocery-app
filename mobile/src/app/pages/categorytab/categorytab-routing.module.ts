import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorytabPage } from './categorytab.page';

const routes: Routes = [
  {
    path: '',
    component: CategorytabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorytabPageRoutingModule {}
