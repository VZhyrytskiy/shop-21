import { Category, Product } from '../../shared/models';

export interface CartProduct extends Partial<Product> {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  cartProductQuantity: number;
}
