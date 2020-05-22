import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CartProduct } from '../../../products/models';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartProductComponent {
  @Input() product: CartProduct;

  @Output() decreaseQuantity: EventEmitter<void> = new EventEmitter();
  @Output() increaseQuantity: EventEmitter<void> = new EventEmitter();
  @Output() remove: EventEmitter<void> = new EventEmitter();
}
