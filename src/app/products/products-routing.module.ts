import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent, ProductViewComponent } from './components';

const routes: Routes = [
  {
    path: 'home',
    component: ProductListComponent,
  },
  {
    path: 'products/:productName',
    component: ProductViewComponent,
    // тут вот можно было бы применить резолв гард
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }
