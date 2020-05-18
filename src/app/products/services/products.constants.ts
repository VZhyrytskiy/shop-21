import { Category, Product } from '../../shared/models';

export const productsMock: Product[] = [
  {
    name: 'IPad',
    description: 'Manufactured date: 2016',
    price: 500,
    category: Category.New,
    isAvailable: true,
    quantity: 19,
  },
    {
    name: 'MacBookPro',
    description: 'Manufactured date: 2020',
    price: 2999.99,
    category: Category.New,
    isAvailable: true,
    quantity: 4,
  },
    {
    name: 'MacMini',
    description: 'Manufactured date: 2010',
    price: 100,
    category: Category.Used,
    isAvailable: true,
    quantity: 1,
  },
    {
    name: 'IPhone',
    description: 'Manufactured date: 2015',
    price: 49,
    category: Category.Used,
    isAvailable: false,
    quantity: 0,
  },
];
