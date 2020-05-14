import { Injectable } from '@angular/core';

import { Product } from '../../shared/models';
import { CartProduct } from '../../products/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartProduct[] = [];

  getCartItems(): CartProduct[] {
    return this.cartItems;
  }

  getCartItemsQuantity(): number {
    return this.cartItems.reduce((acc, item) => acc += item.cartProductQuantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((acc, item) => acc += (item.price * item.cartProductQuantity), 0);
  }

  isDecreaseAmountAvailable(cartProduct: CartProduct): boolean {
    return !!(cartProduct.cartProductQuantity - 1);
  }

  decreaseAmount(cartProduct: CartProduct): void {
    cartProduct.cartProductQuantity--;
  }

  increaseAmount(cartProduct: CartProduct): void {
    cartProduct.cartProductQuantity++;
  }

  addCartItem(item: Product): void {
    const cartProduct: CartProduct = this.cartItems.find(el => el.name === item.name);

    if (cartProduct) {
      cartProduct.cartProductQuantity++;
    } else {
      const newCartProduct: CartProduct = Object.assign({}, item, {cartProductQuantity: 1});
      delete newCartProduct.quantity;
      this.cartItems.push(newCartProduct);
    }
  }

  removeCartItem(item: CartProduct): void {
    const itemIndex: number = this.cartItems.findIndex(el => el.name === item.name);

    this.cartItems.splice(itemIndex, 1);
  }

  resetCart(): void {
    this.cartItems.length = 0;
  }
}

