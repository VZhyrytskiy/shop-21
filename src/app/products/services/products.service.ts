import { Injectable } from '@angular/core';

import { Category, Product } from '../models/ProductModel.model';

const products: Product[] = [
  {
    name: 'IPad',
    description: 'Manufactured date: 2016',
    price: 500,
    category: Category.New,
    isAvailable: true,
  }, {
    name: 'MacBookPro',
    description: 'Manufactured date: 2020',
    price: 2999.99,
    category: Category.New,
    isAvailable: true,
  }, {
    name: 'MacMini',
    description: 'Manufactured date: 2010',
    price: 100,
    category: Category.Used,
    isAvailable: true,
  }, {
    name: 'IPhone',
    description: 'Manufactured date: 2015',
    price: 49,
    category: Category.Used,
    isAvailable: false,
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = products;

  getProducts(): Product[] {
    return this.products;
  }
}
