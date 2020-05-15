import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './orders/orders.module';

import { AppComponent } from './app.component';

const imports = [
  BrowserModule,
  AppRoutingModule,
  CartModule,
  CoreModule,
  OrdersModule,
  ProductsModule,
  SharedModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [...imports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
