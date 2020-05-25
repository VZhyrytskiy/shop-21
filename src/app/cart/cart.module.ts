import { NgModule } from '@angular/core';

import { CartComponent, CartListComponent, CartProductComponent } from './components';

import { SharedModule } from '../shared/shared.module';

const declarations = [
  CartComponent,
  CartListComponent,
  CartProductComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [SharedModule],
  exports: [CartComponent],
})
export class CartModule { }
