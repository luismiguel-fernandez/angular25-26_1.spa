import { Component, inject } from '@angular/core';
import { Garage } from '../garage';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styles: ``,
})
export class Cart {

  private garage = inject(Garage)

  getGarage() {
    return this.garage.getMyCars()
  }
}
