import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../../shared/models';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product;

  @Output() addToCart: EventEmitter<void> = new EventEmitter();
}
