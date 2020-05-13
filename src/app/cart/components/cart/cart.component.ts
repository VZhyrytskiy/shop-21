import { Component } from '@angular/core';

import { CartService } from '../../services/cart.service';

import { Product } from '../../../products/models/ProductModel.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems: Product[] = this.cartService.getCartItems();

  constructor(private cartService: CartService) { }
}
