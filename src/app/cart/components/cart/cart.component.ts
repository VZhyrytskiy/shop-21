import { Component } from '@angular/core';

import { CartService } from '../../services';

import { CartProduct } from '../../../products/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems: CartProduct[] = this.cartService.getCartItems();

  constructor(private cartService: CartService) { }
}
