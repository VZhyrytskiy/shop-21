import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core';

import { CartComponent } from './cart/components';
import { AboutComponent, LoginComponent } from './layout/components';
import { OrderComponent } from './order/components';
import { PathNotFoundComponent } from './core/components';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PathNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
