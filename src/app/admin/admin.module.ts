import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsModule } from '../products/products.module';
import { SharedModule } from '../shared/shared.module';

const imposts = [
  CommonModule,
  ProductsModule,
  SharedModule,
  AdminRoutingModule,
];

@NgModule({
  imports: [...imposts],
  declarations: [AdminRoutingModule.components]
})
export class AdminModule {
}
