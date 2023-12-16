import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';
import { ResolverService } from '../services/resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PagesPage,
    children:[
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        children: [{
          path: '',
          loadChildren: () => import('../pages/hometab/hometab.module').then( m => m.HometabPageModule)
        },
        {
          path: 'details/:id',
          resolve: {payload: ResolverService},
          loadChildren: () => import('./detailspage/detailspage.module').then( m => m.DetailspagePageModule)
        }
      ]
    
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
<<<<<<< HEAD
        path: 'carttab',
        loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
=======
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then(m=>m.CartPageModule)
>>>>>>> nancy's-branch
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
    ] 
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
