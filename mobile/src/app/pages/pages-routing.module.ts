import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'hometab',
    loadChildren: () => import('./hometab/hometab.module').then( m => m.HometabPageModule)
  },
  {
    path: 'categorytab',
    loadChildren: () => import('./categorytab/categorytab.module').then( m => m.CategorytabPageModule)
  },
  {
    path: 'carttab',
    loadChildren: () => import('./carttab/carttab.module').then( m => m.CarttabPageModule)
  },
  {
    path: 'wishlisttab',
    loadChildren: () => import('./wishlisttab/wishlisttab.module').then( m => m.WishlisttabPageModule)
  },
  {
    path: 'detailspage',
    loadChildren: () => import('./detailspage/detailspage.module').then( m => m.DetailspagePageModule)
  },
  {
    path: 'productspage',
    loadChildren: () => import('./productspage/productspage.module').then( m => m.ProductspagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
