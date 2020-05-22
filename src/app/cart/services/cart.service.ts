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
  cartProducts$: Observable<CartProduct[]>;
  totalQuantity$: Observable<number>;
  totalSum$: Observable<number>;

  private cartProducts: CartProduct[] = [];
  private cartProductsSubject = new BehaviorSubject<CartProduct[]>(this.cartProducts);

  constructor() {
    this.cartProducts$ = this.cartProductsSubject.asObservable();

    this.totalQuantity$ = this.cartProducts$.pipe(
      map((cartProducts: CartProduct[]) => {
        return cartProducts.reduce((acc, product) => acc += product.cartProductQuantity, 0);
      })
    );

    this.totalSum$ = this.cartProducts$.pipe(
      map((cartProducts: CartProduct[]) => {
        return cartProducts.reduce((acc, product) => acc += (product.price * product.cartProductQuantity), 0);
      })
    );
  }

  decreaseQuantity(cartProduct: CartProduct): void {
    const cartProductsCopy: CartProduct[] = cloneDeep(this.cartProducts);
    const cartProductCopy: CartProduct = this.getCartProduct(cartProductsCopy, cartProduct);

    cartProductCopy.cartProductQuantity--;
    this.cartProducts = cartProductsCopy;
    this.cartProductsSubject.next(this.cartProducts);
  }

  // TODO refactor to single reduce/increase method
  increaseQuantity(cartProduct: CartProduct): void {
    const cartProductsCopy: CartProduct[] = cloneDeep(this.cartProducts);
    const cartProductCopy: CartProduct = this.getCartProduct(cartProductsCopy, cartProduct);

    cartProductCopy.cartProductQuantity++;
    this.cartProducts = cartProductsCopy;
    this.cartProductsSubject.next(this.cartProducts);
  }

  isDecreaseQuantityAvailable(cartProduct: CartProduct): boolean {
    return !!(cartProduct.cartProductQuantity - 1);
  }

  addProduct(product: Product): void {
    const cartProductsCopy: CartProduct[] = cloneDeep(this.cartProducts);
    const cartProduct: CartProduct = this.getCartProduct(cartProductsCopy, product);

    if (cartProduct) {
      cartProduct.cartProductQuantity++;
    } else {
      const newCartProduct: CartProduct = Object.assign({}, product, {cartProductQuantity: 1});
      delete newCartProduct.quantity;
      cartProductsCopy.push(newCartProduct);
    }

    this.cartProducts = cartProductsCopy;
    this.cartProductsSubject.next(this.cartProducts);
  }

  removeProduct(cartProduct: CartProduct): void {
    const cartProductsCopy: CartProduct[] = cloneDeep(this.cartProducts);
    const cartProductIndex: number = cartProductsCopy.findIndex((el) => el.name === cartProduct.name);

    cartProductsCopy.splice(cartProductIndex, 1);
    this.cartProducts = cartProductsCopy;
    this.cartProductsSubject.next(this.cartProducts);
  }

  removeAllProducts(): void {
    this.cartProducts = [];
    this.cartProductsSubject.next(this.cartProducts);
  }

  private getCartProduct(cartProducts: CartProduct[], cartProduct: CartProduct | Product): CartProduct {
    return cartProducts.find((el: CartProduct): boolean => el.name === cartProduct.name);
  }
}

