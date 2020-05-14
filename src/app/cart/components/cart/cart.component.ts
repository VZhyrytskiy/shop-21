import { Component } from '@angular/core';

import { CartService } from '../../services/cart.service';

import { Product } from '../../../products/models/ProductModel.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems: Product[] = this.cartService.getCartItems(); // обычно так не делают, выносят в метод ngOnInit

  constructor(private cartService: CartService) { }
}
