import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styles: ``,
})
export class Products {
  private inventarioCoches: any[] = [
    {
      id: 101, // ID única
      fabricante: "Toyota",
      modelo: "Corolla",
      precio: 25000,
      tipoMotor: "Híbrido"
    },
    {
      id: 102,
      fabricante: "Volkswagen",
      modelo: "Golf",
      precio: 28000,
      tipoMotor: "Gasolina"
    },
    {
      id: 103,
      fabricante: "Tesla",
      modelo: "Model 3",
      precio: 45000,
      tipoMotor: "Eléctrico"
    },
    {
      id: 104,
      fabricante: "BMW",
      modelo: "Serie 3",
      precio: 42000,
      tipoMotor: "Diésel"
    },
    {
      id: 105,
      fabricante: "Ford",
      modelo: "Mustang Mach-E",
      precio: 55000,
      tipoMotor: "Eléctrico"
    },
    {
      id: 106,
      fabricante: "Mercedes-Benz",
      modelo: "Clase A",
      precio: 35000,
      tipoMotor: "Híbrido"
    },
    {
      id: 107,
      fabricante: "Hyundai",
      modelo: "Tucson",
      precio: 30000,
      tipoMotor: "Híbrido"
    },
    {
      id: 108,
      fabricante: "Nissan",
      modelo: "Qashqai",
      precio: 27000,
      tipoMotor: "Gasolina"
    },
    {
      id: 109,
      fabricante: "Audi",
      modelo: "A4",
      precio: 40000,
      tipoMotor: "Diésel"
    },
    {
      id: 110,
      fabricante: "Kia",
      modelo: "EV6",
      precio: 48000,
      tipoMotor: "Eléctrico"
    },
    {
      id: 111,
      fabricante: "Honda",
      modelo: "CR-V",
      precio: 32000,
      tipoMotor: "Híbrido"
    },
    {
      id: 112,
      fabricante: "Renault",
      modelo: "Clio",
      precio: 18000,
      tipoMotor: "Gasolina"
    },
    {
      id: 113,
      fabricante: "Seat",
      modelo: "León",
      precio: 24000,
      tipoMotor: "Gasolina"
    },
    {
      id: 114,
      fabricante: "Peugeot",
      modelo: "3008",
      precio: 31000,
      tipoMotor: "Diésel"
    },
    {
      id: 115,
      fabricante: "Skoda",
      modelo: "Octavia",
      precio: 26000,
      tipoMotor: "Diésel"
    },
    {
      id: 116,
      fabricante: "Porsche",
      modelo: "Taycan",
      precio: 95000,
      tipoMotor: "Eléctrico"
    },
    {
      id: 117,
      fabricante: "Volvo",
      modelo: "XC40",
      precio: 38000,
      tipoMotor: "Híbrido"
    },
    {
      id: 118,
      fabricante: "Subaru",
      modelo: "Outback",
      precio: 34000,
      tipoMotor: "Gasolina"
    },
    {
      id: 119,
      fabricante: "Mazda",
      modelo: "CX-5",
      precio: 29000,
      tipoMotor: "Gasolina"
    },
    {
      id: 120,
      fabricante: "Citroën",
      modelo: "C4",
      precio: 22000,
      tipoMotor: "Diésel"
    }
  ];
  
  getCoches() {
    return this.inventarioCoches
  }

  ordenarPorPrecio() {
    this.inventarioCoches.sort((a, b) => a.precio - b.precio);
  }

}
