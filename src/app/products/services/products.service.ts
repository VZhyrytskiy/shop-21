import { Injectable } from '@angular/core';

import { Product } from '../../shared/models';
import { CartProduct } from '../models';

import { products } from './products.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] | null = ProductsService.setProducts();

  private static setProducts(): Product[] {
    return products;
  }

  getProducts(): Product[] | null {
    return this.products;
  }

  getProductQuantity(product: CartProduct): number {
    return this.products.find(el => el.name === product.name).quantity;
  }

  increaseQuantity(product: Product | CartProduct): void {
    const inStockProduct = this.products.find(el => el.name === product.name);

    if (!inStockProduct.quantity) {
      inStockProduct.isAvailable = true;
    }

    inStockProduct.quantity++;
  }

  reduceQuantity(product: Product | CartProduct): void {
    const inStockProduct: Product = this.products.find(el => el.name === product.name);

    inStockProduct.quantity--;

    if (!inStockProduct.quantity) {
      inStockProduct.isAvailable = false;
    }
  }

  setProductQuantityFromCartItem(cartProducts: CartProduct): void {
    const inStockProduct: Product = this.products.find(el => el.name === cartProducts.name);

    inStockProduct.quantity += cartProducts.cartProductQuantity;
    inStockProduct.isAvailable = true;
  }

  setProductQuantityFromCartItems(cartProducts: CartProduct[]): void {
    cartProducts.forEach(cartProductsItem => {
      const inStockProduct = this.products.find(el => el.name === cartProductsItem.name);

      inStockProduct.quantity += cartProductsItem.cartProductQuantity;
      inStockProduct.isAvailable = true;
    });
  }
}
