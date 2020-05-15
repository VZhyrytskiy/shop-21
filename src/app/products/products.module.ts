import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, ProductListComponent } from './components';

const declarations = [
  ProductComponent,
  ProductListComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [ProductListComponent],
})
export class ProductsModule { }
