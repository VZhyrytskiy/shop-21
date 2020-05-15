import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent, CartListComponent, CartItemComponent } from './components';

import { SharedModule } from '../shared/shared.module';

const declarations = [
  CartComponent,
  CartListComponent,
  CartItemComponent,
];

const imports = [
  CommonModule,
  SharedModule,
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [CartComponent],
})
export class CartModule { }
