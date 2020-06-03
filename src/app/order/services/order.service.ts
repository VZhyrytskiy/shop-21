import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { cloneDeep } from 'lodash';

import { CartProduct } from '../../products/models';
import { Order } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders$: Observable<Order[]>;

  private orders: Order[] = [];
  private ordersSubject = new BehaviorSubject< Order[]>(this.orders);

  constructor() {
    this.orders$ = this.ordersSubject.asObservable();
  }

  addOrder(cartProducts: CartProduct[]): void {
    const cartProductsCopy = cloneDeep(cartProducts);

    this.orders = [
      ...this.orders,
      {
        products: cartProductsCopy,
        date: new Date(),
      }
    ];
    this.ordersSubject.next(this.orders);
  }
}
