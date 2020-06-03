import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import {
  ProductComponent,
  ProductListComponent,
  ProductViewComponent,
  ProductEditComponent,
} from './components';
import { ProductsRoutingModule } from './products-routing.module';

const declarations = [
  ProductComponent,
  ProductListComponent,
  ProductViewComponent,
  ProductEditComponent,
];

const imports = [
  SharedModule,
  ProductsRoutingModule,
];

const exports = [
  ProductListComponent,
  ProductEditComponent,
  ProductComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...exports],
})
export class ProductsModule { }
