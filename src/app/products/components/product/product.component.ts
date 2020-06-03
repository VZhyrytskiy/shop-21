import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../../shared/models';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() product: Product;
  @Input() isInfoMode: boolean = false;
  @Input() isAdmin: boolean = false;

  @Output() addToCart: EventEmitter<void> = new EventEmitter();
  @Output() viewDetails: EventEmitter<void> = new EventEmitter();
  @Output() editProduct: EventEmitter<void> = new EventEmitter();
  @Output() goBack: EventEmitter<void> = new EventEmitter();
}
