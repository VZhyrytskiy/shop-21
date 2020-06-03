import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CartService } from '../../services';

import { CartProduct } from '../../../products/models';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  cartProducts$: Observable<CartProduct[]>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts$ = this.cartService.cartProducts$;
  }
}
