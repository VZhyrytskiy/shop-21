import { Component } from '@angular/core';

import { ProductsService } from '../../services/products.service';

import { Product } from '../../models/ProductModel.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = this.productsService.getProducts();

  constructor(private productsService: ProductsService) { }

}
