import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services';
import { CartService } from '../../../cart/services';

import { Product } from '../../../shared/models';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  addToCart(product: Product): void {
    this.productsService.reduceQuantity(product);
    this.cartService.addCartItem(product);
  }
}
