import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/components/first';
import { ProductComponent } from './products/components/product';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { CartComponent } from './cart/components/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// проект не запускается, веротно не все выложено
// ERROR in src/app/app.module.ts(8,38): error TS2307: Cannot find module './products/components/product-list/product-list.component'.
// src/app/app.module.ts(9,31): error TS2307: Cannot find module './cart/components/cart.component'.
// src/app/products/components/product/index.ts(1,34): error TS2307: Cannot find module './product.component'.
