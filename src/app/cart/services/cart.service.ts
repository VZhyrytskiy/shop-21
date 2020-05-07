import { Injectable } from '@angular/core';

import { Product } from '../../products/models/ProductModel.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];

  getCartItems(): Product[] {
    return this.cartItems;
  }

  addCartItem(item: Product): void {
    this.cartItems.push(item);
  }

  resetCart(): void {
    this.cartItems = [];
  }
}

