import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styles: `
    .card-hover {
      transition: all 0.3s ease-in-out;
      cursor: pointer; 
    }
    .card-hover:hover {
      box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important; 
      transform: translateY(-5px) scale(1.02);
    }
  `,
})
export class ProductCard {
  @Input() oneCar: any;
}
