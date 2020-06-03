import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { cloneDeep } from 'lodash';

import { pluck, switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import { Product } from '../../../shared/models';

import { ProductsService } from '../../services';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductEditComponent implements OnInit, OnDestroy {
  product: Product;
  originalProductName: string;
  subscription: Subscription;
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private location: Location) {
  }

  ngOnInit(): void {
    this.subscription = new Subscription();

    this.product$ = this.route.params.pipe(
      pluck('productID'),
      switchMap((productID: string) => {
        return this.productsService.getProduct(productID);
      }));

    this.subscription.add(
      this.product$.subscribe((product: Product) => {
        this.originalProductName = product.name;
        this.product = cloneDeep(product);
      }));
  }

  onSaveProduct() {
    if (this.originalProductName) {
      this.productsService.updateProduct(this.product);
      this.onGoBack();
    } else {
      this.productsService.createProduct(this.product);
      this.onGoBack();
    }
  }

  onGoBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

