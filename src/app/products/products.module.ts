import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ProductComponent, ProductListComponent } from './components';

const declarations = [
  ProductComponent,
  ProductListComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [SharedModule],
  exports: [ProductListComponent],
})
export class ProductsModule { }
