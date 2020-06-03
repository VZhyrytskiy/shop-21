import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { CartService } from '../../services';
import { ProductsService } from '../../../products/services';
import { OrderService } from '../../../order/services';

import { CartProduct } from '../../../products/models';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent implements OnInit, OnDestroy {
  propertyToOrder: string = 'name';
  isAscendingOrder: boolean = true;

  private subscription: Subscription;

  cartProducts: CartProduct[];
  cartProducts$: Observable<CartProduct[]>;
  totalSum$: Observable<number>;
  totalQuantity$: Observable<number>;

  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
    private orderService: OrderService) {
  }

  ngOnInit() {
    this.subscription = new Subscription();
    this.cartProducts$ = this.cartService.cartProducts$;
    this.totalSum$ = this.cartService.totalSum$;
    this.totalQuantity$ = this.cartService.totalQuantity$;
    this.subscription.add(this.cartProducts$.subscribe(
      (cartProducts: CartProduct[]) => {
        this.cartProducts = cartProducts;
      }));
  }

  trackByIndex(index: number): number {
    return index;
  }

  increaseQuantity(cartProduct: CartProduct): void {
    const stockProductQuantity = this.productsService.getProductQuantity(cartProduct);

    if (stockProductQuantity) {
      this.cartService.increaseQuantity(cartProduct);
      this.productsService.reduceQuantity(cartProduct);
    }
  }

  decreaseQuantity(cartProduct: CartProduct): void {
    if (this.cartService.isDecreaseQuantityAvailable(cartProduct)) {
      this.cartService.decreaseQuantity(cartProduct);
    } else {
      this.cartService.removeProduct(cartProduct);
    }

    this.productsService.increaseQuantity(cartProduct);
  }

  removeProduct(cartProduct: CartProduct): void {
    this.productsService.setProductQuantityFromCartProduct(cartProduct);
    this.cartService.removeProduct(cartProduct);
  }

  removeAllProducts(): void {
    this.productsService.setProductQuantityFromCartProducts(this.cartProducts);
    this.cartService.removeAllProducts();
  }

  placeOrder(): void {
    this.orderService.addOrder(this.cartProducts);
    this.cartService.clearCart();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
