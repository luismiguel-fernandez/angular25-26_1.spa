import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styles: ``,
})
export class ProductCard {
  @Input() oneCar: any;
}
