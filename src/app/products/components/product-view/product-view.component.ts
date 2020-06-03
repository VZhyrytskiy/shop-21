import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { cloneDeep } from 'lodash';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Product } from '../../../shared/models';

import { ProductsService } from '../../services';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductViewComponent implements OnInit {
  product: Product;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const observer = {
      next: (product: Product) => {
        return this.product = cloneDeep(product);
      },
      error: (err: any) => console.log(err)
    };

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap): Observable<Product> => {
          return this.productsService.getProduct(params.get('productName'));
        }))
      .subscribe(observer);
  }

  onGoBack() {
    this.router.navigate(['/home']);
  }
}
