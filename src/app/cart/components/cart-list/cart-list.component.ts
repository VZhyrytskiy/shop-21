import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { CartService } from '../../services';
import { ProductsService } from '../../../products/services';

import { CartProduct } from '../../../products/models';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  cartItems: CartProduct[];
  cartItems$: Observable<CartProduct[]>;
  cartTotalPrice$: Observable<number>;
  cartItemsQuantity$: Observable<number>;

  constructor(
    private cartService: CartService,
    private productsService: ProductsService) {
  }

  ngOnInit() {
    this.subscription = new Subscription();
    this.cartItems$ = this.cartService.cartItems$;
    this.cartTotalPrice$ = this.cartService.cartTotalPrice$;
    this.cartItemsQuantity$ = this.cartService.cartItemsQuantity$;
    this.subscription.add(this.cartItems$.subscribe(
      (cartItems: CartProduct[]) => {
        this.cartItems = cartItems;
      }));
  }

  trackByIndex(index: number): number {
    return index;
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
