import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/components/first';
import { ProductComponent, ProductListComponent } from './products/components';
import { CartComponent } from './cart/components';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';

const declarations = [
  AppComponent,
  FirstComponent,
  ProductComponent,
  ProductListComponent,
  CartComponent,
];

@NgModule({
  declarations: [...declarations, CartListComponent], // наверное, этот компонент тоже можно добавить в массив declarations
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
