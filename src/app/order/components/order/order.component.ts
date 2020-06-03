import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { OrderService } from '../../services';

import { Order } from '../../models';

@Component({
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders$: Observable<Order[]>;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders$ = this.orderService.orders$;
  }
}
