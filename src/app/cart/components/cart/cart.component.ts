import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services';

import { CartProduct } from '../../../products/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: CartProduct[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }
}
