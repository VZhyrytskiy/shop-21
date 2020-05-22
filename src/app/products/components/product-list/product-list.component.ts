import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ProductsService } from '../../services';
import { CartService } from '../../../cart/services';

import { Product } from '../../../shared/models';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService) {
  }

  ngOnInit() {
    this.products$ = this.productsService.products$;
  }

  trackByIndex(index: number): number {
    return index;
  }

  addToCart(product: Product): void {
    this.productsService.reduceQuantity(product);
    this.cartService.addProduct(product);
  }
}
