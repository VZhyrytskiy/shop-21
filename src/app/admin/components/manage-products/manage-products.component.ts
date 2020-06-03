import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Product } from '../../../shared/models';

import { ProductsService } from '../../../products/services';

@Component({
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent {
  products$: Observable<Product[]> = this.productsService.products$;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  trackByIndex(index: number): number {
    return index;
  }

  onEditProduct(product: Product) {
    this.router.navigate(['../product/edit', product.name], { relativeTo: this.route });
  }
}
