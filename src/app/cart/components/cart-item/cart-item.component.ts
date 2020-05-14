import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CartProduct } from '../../../products/models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() product: CartProduct;

  @Output() decreaseAmount: EventEmitter<CartProduct> = new EventEmitter();
  @Output() increaseAmount: EventEmitter<CartProduct> = new EventEmitter();
  @Output() remove: EventEmitter<CartProduct> = new EventEmitter();
}
