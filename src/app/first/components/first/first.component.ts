import { Component } from '@angular/core';

import { Category } from '../../../products/models/ProductModel.model';

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  name: string = 'IPhone';
  description: string = 'Iphone 6s';
  price: number = 199.99;
  category: typeof Category = Category;
  isAvailable: boolean = true;
}
