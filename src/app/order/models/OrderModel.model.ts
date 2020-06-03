import { CartProduct } from '../../products/models';

export interface Order {
  products: CartProduct[];
  date: Date;
}
