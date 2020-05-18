import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CartService } from '../../services';

import { CartProduct } from '../../../products/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartProduct[]>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems$ = this.cartService.cartItems$;
  }
}
