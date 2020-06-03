import { Pipe, PipeTransform } from '@angular/core';

import { cloneDeep } from 'lodash';

import { CartProduct } from '../../products/models';
import { Product } from '../models';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(cartProducts: Array<CartProduct | Product>, sortBy: string, isAscending?: boolean): Array<CartProduct | Product> {
    const cartProductsCopy: Array<CartProduct | Product> = cloneDeep(cartProducts);

    return cartProductsCopy.sort(this.compare(sortBy, isAscending));
  }

  private compare(key, ascending = true) {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return !ascending ? (comparison * -1) : comparison;
    };
  }
}
