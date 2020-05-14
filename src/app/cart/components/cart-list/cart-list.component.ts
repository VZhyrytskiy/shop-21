import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services';
import { ProductsService } from '../../../products/services';

import { CartProduct } from '../../../products/models';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  cartItems: CartProduct[];

  constructor(
    private cartService: CartService,
    private productsService: ProductsService) {
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  trackByFn(index: number): number {
    return index;
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  getCartItemsQuantity(): number {
    return this.cartService.getCartItemsQuantity();
  }

  increaseAmount(cartProduct: CartProduct): void {
    const stockProductQuantity = this.productsService.getProductQuantity(cartProduct);

    if (stockProductQuantity) {
      this.cartService.increaseAmount(cartProduct);
      this.productsService.reduceQuantity(cartProduct);
    }
  }

  decreaseAmount(cartProduct: CartProduct): void {
    if (this.cartService.isDecreaseAmountAvailable(cartProduct)) {
      this.cartService.decreaseAmount(cartProduct);
    } else {
      this.cartService.removeCartItem(cartProduct);
    }

    this.productsService.increaseQuantity(cartProduct);
  }

  removeCartItem(cartProduct: CartProduct): void {
    this.productsService.setProductQuantityFromCartItem(cartProduct);
    this.cartService.removeCartItem(cartProduct);
  }

  resetCart(): void {
    this.productsService.setProductQuantityFromCartItems(this.cartItems);
    this.cartService.resetCart();
  }
}
