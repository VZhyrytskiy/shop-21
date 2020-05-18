import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { cloneDeep } from 'lodash';

import { Product } from '../../shared/models';
import { CartProduct } from '../../products/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems$: Observable<CartProduct[]>;
  cartItemsQuantity$: Observable<number>;
  cartTotalPrice$: Observable<number>;

  private cartItems: CartProduct[] = [];
  private cartItemsSubject = new BehaviorSubject<CartProduct[]>(this.cartItems);

  constructor() {
    this.cartItems$ = this.cartItemsSubject.asObservable();

    this.cartItemsQuantity$ = this.cartItems$.pipe(
      map((cartItems: CartProduct[]) => {
        return cartItems.reduce((acc, item) => acc += item.cartProductQuantity, 0);
      })
    );

    this.cartTotalPrice$ = this.cartItems$.pipe(
      map((cartItems: CartProduct[]) => {
        return cartItems.reduce((acc, item) => acc += (item.price * item.cartProductQuantity), 0);
      })
    );
  }

  decreaseAmount(cartProduct: CartProduct): void {
    const cartItemsCopy: CartProduct[] = cloneDeep(this.cartItems);
    const cartItem: CartProduct = this.getCartProduct(cartItemsCopy, cartProduct);

    cartItem.cartProductQuantity--;
    this.cartItems = cartItemsCopy;
    this.cartItemsSubject.next(this.cartItems);
  }

  // TODO refactor to single reduce/increase method
  increaseAmount(cartProduct: CartProduct): void {
    const cartItemsCopy: CartProduct[] = cloneDeep(this.cartItems);
    const cartItem: CartProduct = this.getCartProduct(cartItemsCopy, cartProduct);

    cartItem.cartProductQuantity++;
    this.cartItems = cartItemsCopy;
    this.cartItemsSubject.next(this.cartItems);
  }

  isDecreaseAmountAvailable(cartProduct: CartProduct): boolean {
    return !!(cartProduct.cartProductQuantity - 1);
  }

  addCartItem(product: Product): void {
    const cartItemsCopy: CartProduct[] = cloneDeep(this.cartItems);
    const cartItem: CartProduct = this.getCartProduct(cartItemsCopy, product);

    if (cartItem) {
      cartItem.cartProductQuantity++;
    } else {
      const newCartProduct: CartProduct = Object.assign({}, product, {cartProductQuantity: 1});
      delete newCartProduct.quantity;
      cartItemsCopy.push(newCartProduct);
    }

    this.cartItems = cartItemsCopy;
    this.cartItemsSubject.next(this.cartItems);
  }

  removeCartItem(cartProduct: CartProduct): void {
    const cartItemsCopy: CartProduct[] = cloneDeep(this.cartItems);
    const cartItemIndex: number = cartItemsCopy.findIndex((el) => el.name === cartProduct.name);

    cartItemsCopy.splice(cartItemIndex, 1);
    this.cartItems = cartItemsCopy;
    this.cartItemsSubject.next(this.cartItems);
  }

  resetCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }

  private getCartProduct(cartProducts: CartProduct[], cartProduct: CartProduct | Product): CartProduct {
    return cartProducts.find((el: CartProduct): boolean => el.name === cartProduct.name);
  }
}

