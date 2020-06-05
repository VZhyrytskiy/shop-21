import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';

import { Category, Product } from '../../shared/models';

@Injectable({
  providedIn: 'any'
})
export class ProductResolveGuard implements Resolve<Product> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Product> | Promise<Product> | Product | null {

    // не понимаю сути этого гарда: если нет параметра, то вернуть заготовку продукта, а если есть параметр?
    // вы его подключили для product/edit/:productID' в роутинге админки, что он будет возвращать?
    // судя по коду product-edit component он не пользуется услугами этого гарда, а сам читает параметры и получает данные
      if (!route.paramMap.has('productID')) {
      const newProduct: Product = {
        name: '',
        description: '',
        price: 0,
        category: Category.New,
        isAvailable: true,
        quantity: 1
      };

      return of(newProduct);
    }
  }
}
