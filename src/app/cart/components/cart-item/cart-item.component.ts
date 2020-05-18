import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CartProduct } from '../../../products/models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() product: CartProduct;

  @Output() decreaseAmount: EventEmitter<void> = new EventEmitter();
  @Output() increaseAmount: EventEmitter<void> = new EventEmitter();
  @Output() remove: EventEmitter<void> = new EventEmitter();
}
