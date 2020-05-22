import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

import { cloneDeep } from 'lodash';


import { Product } from '../../shared/models';
import { CartProduct } from '../models';

import { productsMock } from './products.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products$: Observable<Product[]>;

  private products: Product[] = productsMock;
  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  constructor() {
    this.products$ = this.productsSubject.asObservable();
  }

  getProductQuantity(product: CartProduct): number {
    return this.products.find(el => el.name === product.name).quantity;
  }

  increaseQuantity(product: Product | CartProduct): void {
    const productsCopy: Product[] = cloneDeep(this.products);
    const inStockProduct: Product = this.getProduct(productsCopy, product);

    if (!inStockProduct.quantity) {
      inStockProduct.isAvailable = true;
    }
    inStockProduct.quantity++;
    this.products = productsCopy;
    this.productsSubject.next(this.products);
  }

  reduceQuantity(product: Product | CartProduct): void {
    const productsCopy: Product[] = cloneDeep(this.products);
    const inStockProduct: Product = this.getProduct(productsCopy, product);

    inStockProduct.quantity--;

    if (!inStockProduct.quantity) {
      inStockProduct.isAvailable = false;
    }
    this.products = productsCopy;
    this.productsSubject.next(this.products);
  }

  setProductQuantityFromCartProduct(cartProducts: CartProduct): void {
    const productsCopy: Product[] = cloneDeep(this.products);
    const inStockProduct: Product = this.getProduct(productsCopy, cartProducts);

    inStockProduct.quantity += cartProducts.cartProductQuantity;
    inStockProduct.isAvailable = true;
    this.products = productsCopy;
    this.productsSubject.next(this.products);
  }

  setProductQuantityFromCartProducts(cartProducts: CartProduct[]): void {
    const productsCopy: Product[] = cloneDeep(this.products);

    cartProducts.forEach(cartProductsItem => {
      const inStockProduct: Product = this.getProduct(productsCopy, cartProductsItem);

      inStockProduct.quantity += cartProductsItem.cartProductQuantity;
      inStockProduct.isAvailable = true;
      this.products = productsCopy;
      this.productsSubject.next(this.products);
    });
  }

  private getProduct(products: Product[], product: Product | CartProduct): Product {
    return products.find((el: Product) => el.name === product.name);
  }
}
