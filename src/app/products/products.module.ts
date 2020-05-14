import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product';
import { ProductListComponent } from './components/product-list';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent,
  ]
})
export class ProductsModule { }
