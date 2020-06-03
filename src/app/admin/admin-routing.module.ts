import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AdminComponent,
  ManageOrdersComponent,
  ManageProductsComponent,
  ChangeProductsComponent,
} from './components';

import { AuthGuard } from '../core';
import { ProductResolveGuard } from '../products/guards';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'products', component: ManageProductsComponent },
          { path: 'product/add', component: ChangeProductsComponent },
          {
            path: 'product/edit/:productID',
            component: ChangeProductsComponent,
            resolve: {
              product: ProductResolveGuard,
            },
          },
          { path: 'orders', component: ManageOrdersComponent },
          { path: '', redirectTo: 'products', pathMatch: 'full' },
        ] }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminComponent,
    ManageProductsComponent,
    ManageOrdersComponent,
    ChangeProductsComponent,
  ];
}
