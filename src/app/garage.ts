import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Garage {
  private myCars: any[] = []

  getMyCars() {
    return this.myCars
  }

  addCarToMyCars(oneCar: any) {
    let encontrado = this.myCars.find( c => c.id == oneCar.id )
    if (!encontrado)
      this.myCars.push(oneCar)
  }

  isAlreadyInMyCars(oneCar:any) {
    return this.myCars.find( c => c.id == oneCar.id )
  }

  removeCarFromMyCars(oneCar: any) {
    let index = this.myCars.findIndex( c => c.id == oneCar.id )
    if (index >= 0) {
      this.myCars.splice(index,1)
    }
  }
}
