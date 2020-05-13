import { Component, Input } from '@angular/core';

import { Product } from '../../../products/models/ProductModel.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  @Input() cartItems: Product[];
}
