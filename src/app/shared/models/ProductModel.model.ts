export interface Product {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  quantity: number;
}

export enum Category {
  New = 'New',
  Used = 'Used',
}

// export class Product {
//   constructor(
//     public name: string,
//     public description: string,
//     public price: number = 0,
//     public category: Category,
//     public isAvailable: boolean = false,
//   ) {
//   }
// }
