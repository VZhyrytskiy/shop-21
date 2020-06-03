import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { cloneDeep } from 'lodash';


import { Category, Product } from '../../shared/models';
import { CartProduct } from '../models';

import { productsMock } from './products.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products$: Observable<Product[]>;
  initialProduct: Product = {
    name: '',
    description: '',
    price: 0,
    category: Category.New,
    isAvailable: true,
    quantity: 1
  };

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
    const inStockProduct: Product = this.getProductFromProducts(productsCopy, product);

    if (!inStockProduct.quantity) {
      inStockProduct.isAvailable = true;
    }
    inStockProduct.quantity++;
    this.products = productsCopy;
    this.productsSubject.next(this.products);
  }

  reduceQuantity(product: Product | CartProduct): void {
    const productsCopy: Product[] = cloneDeep(this.products);
    const inStockProduct: Product = this.getProductFromProducts(productsCopy, product);

    inStockProduct.quantity--;

    if (!inStockProduct.quantity) {
      inStockProduct.isAvailable = false;
    }
    this.products = productsCopy;
    this.productsSubject.next(this.products);
  }

  setProductQuantityFromCartProduct(cartProducts: CartProduct): void {
    const productsCopy: Product[] = cloneDeep(this.products);
    const inStockProduct: Product = this.getProductFromProducts(productsCopy, cartProducts);

    inStockProduct.quantity += cartProducts.cartProductQuantity;
    inStockProduct.isAvailable = true;
    this.products = productsCopy;
    this.productsSubject.next(this.products);
  }

  setProductQuantityFromCartProducts(cartProducts: CartProduct[]): void {
    const productsCopy: Product[] = cloneDeep(this.products);

    cartProducts.forEach(cartProductsItem => {
      const inStockProduct: Product = this.getProductFromProducts(productsCopy, cartProductsItem);

      inStockProduct.quantity += cartProductsItem.cartProductQuantity;
      inStockProduct.isAvailable = true;
      this.products = productsCopy;
      this.productsSubject.next(this.products);
    });
  }

  getProduct(productID: string): Observable<Product> {
    return of<Product>(productID
      ? cloneDeep(this.products.find((product: Product) => product.name === productID))
      : cloneDeep(this.initialProduct)
    );
  }

  updateProduct(product: Product): void {
    const productsCopy: Product[] = cloneDeep(this.products);

    this.products = productsCopy.filter(el => el.name !== product.name);
    this.products.push(product);
    this.productsSubject.next(this.products);
  }

  createProduct(product: Product): void {
    this.products = cloneDeep(this.products);
    this.products.push(product);
    this.productsSubject.next(this.products);
  }

  private getProductFromProducts(products: Product[], product: Product | CartProduct): Product {
    return products.find((el: Product) => el.name === product.name);
  }
}
