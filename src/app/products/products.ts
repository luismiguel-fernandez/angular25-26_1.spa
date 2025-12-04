import { Component, inject } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Garage } from '../garage';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styles: ``,
})
export class Products {
private inventarioCoches: any[] = [
    {
      id: 101,
      fabricante: "Toyota",
      modelo: "Corolla",
      precio: 25000,
      tipoMotor: "Híbrido",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/2020_Toyota_Corolla_LE_sedan_%28USA%29_front_11.23.19.jpg/640px-2020_Toyota_Corolla_LE_sedan_%28USA%29_front_11.23.19.jpg"
    },
    {
      id: 102,
      fabricante: "Volkswagen",
      modelo: "Golf",
      precio: 28000,
      tipoMotor: "Gasolina",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2020_Volkswagen_Golf_Style_1.5_Front.jpg/640px-2020_Volkswagen_Golf_Style_1.5_Front.jpg"
    },
    {
      id: 103,
      fabricante: "Tesla",
      modelo: "Model 3",
      precio: 45000,
      tipoMotor: "Eléctrico",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Tesla_Model_3_IMG_3059.jpg/640px-Tesla_Model_3_IMG_3059.jpg"
    },
    {
      id: 104,
      fabricante: "BMW",
      modelo: "Serie 3",
      precio: 42000,
      tipoMotor: "Diésel",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/2020_BMW_330i_M_Sport_2.0_Front.jpg/640px-2020_BMW_330i_M_Sport_2.0_Front.jpg"
    },
    {
      id: 105,
      fabricante: "Ford",
      modelo: "Mustang Mach-E",
      precio: 55000,
      tipoMotor: "Eléctrico",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ford_Mustang_Mach-E_AWD_First_Edition_2021_1X7A6223.jpg/640px-Ford_Mustang_Mach-E_AWD_First_Edition_2021_1X7A6223.jpg"
    },
    {
      id: 106,
      fabricante: "Mercedes-Benz",
      modelo: "Clase A",
      precio: 35000,
      tipoMotor: "Híbrido",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/2018_Mercedes-Benz_A200_AMG_Line_Premium_Automatic_1.3_Front.jpg/640px-2018_Mercedes-Benz_A200_AMG_Line_Premium_Automatic_1.3_Front.jpg"
    },
    {
      id: 107,
      fabricante: "Hyundai",
      modelo: "Tucson",
      precio: 30000,
      tipoMotor: "Híbrido",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/2021_Hyundai_Tucson_Hybrid_SEL.jpg/640px-2021_Hyundai_Tucson_Hybrid_SEL.jpg"
    },
    {
      id: 108,
      fabricante: "Nissan",
      modelo: "Qashqai",
      precio: 27000,
      tipoMotor: "Gasolina",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Nissan_Qashqai_J12_1X7A6109.jpg/640px-Nissan_Qashqai_J12_1X7A6109.jpg"
    },
    {
      id: 109,
      fabricante: "Audi",
      modelo: "A4",
      precio: 40000,
      tipoMotor: "Diésel",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Audi_A4_S_Line_TDI_S-A_2.0_Front.jpg/640px-2018_Audi_A4_S_Line_TDI_S-A_2.0_Front.jpg"
    },
    {
      id: 110,
      fabricante: "Kia",
      modelo: "EV6",
      precio: 48000,
      tipoMotor: "Eléctrico",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kia_EV6_GT-Line_IAA_2021_1X7A0065.jpg/640px-Kia_EV6_GT-Line_IAA_2021_1X7A0065.jpg"
    },
    {
      id: 111,
      fabricante: "Honda",
      modelo: "CR-V",
      precio: 32000,
      tipoMotor: "Híbrido",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/2023_Honda_CR-V_Hybrid_Sport_Touring_%28USA%29_front_view.jpg/640px-2023_Honda_CR-V_Hybrid_Sport_Touring_%28USA%29_front_view.jpg"
    },
    {
      id: 112,
      fabricante: "Renault",
      modelo: "Clio",
      precio: 18000,
      tipoMotor: "Gasolina",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Renault_Clio_V_Mondial_de_Paris_2018_001.jpg/640px-Renault_Clio_V_Mondial_de_Paris_2018_001.jpg"
    },
    {
      id: 113,
      fabricante: "Seat",
      modelo: "León",
      precio: 24000,
      tipoMotor: "Gasolina",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Seat_Leon_1.5_eTSI_FR_%28IV%29_%E2%80%93_f_17052021.jpg/640px-Seat_Leon_1.5_eTSI_FR_%28IV%29_%E2%80%93_f_17052021.jpg"
    },
    {
      id: 114,
      fabricante: "Peugeot",
      modelo: "3008",
      precio: 31000,
      tipoMotor: "Diésel",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Peugeot_3008_GT_Hybrid4_%28Facelift%29_IMG_3840.jpg/640px-Peugeot_3008_GT_Hybrid4_%28Facelift%29_IMG_3840.jpg"
    },
    {
      id: 115,
      fabricante: "Skoda",
      modelo: "Octavia",
      precio: 26000,
      tipoMotor: "Diésel",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/2020_Skoda_Octavia_SE_Technology_TSI_1.0_Front.jpg/640px-2020_Skoda_Octavia_SE_Technology_TSI_1.0_Front.jpg"
    },
    {
      id: 116,
      fabricante: "Porsche",
      modelo: "Taycan",
      precio: 95000,
      tipoMotor: "Eléctrico",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Porsche_Taycan_Turbo_IMG_3345.jpg/640px-Porsche_Taycan_Turbo_IMG_3345.jpg"
    },
    {
      id: 117,
      fabricante: "Volvo",
      modelo: "XC40",
      precio: 38000,
      tipoMotor: "Híbrido",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/2019_Volvo_XC40_R-Design_Pro_T5_AWD_Automatic_2.0_Front.jpg/640px-2019_Volvo_XC40_R-Design_Pro_T5_AWD_Automatic_2.0_Front.jpg"
    },
    {
      id: 118,
      fabricante: "Subaru",
      modelo: "Outback",
      precio: 34000,
      tipoMotor: "Gasolina",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/2020_Subaru_Outback_AWD_2.5_Front.jpg/640px-2020_Subaru_Outback_AWD_2.5_Front.jpg"
    },
    {
      id: 119,
      fabricante: "Mazda",
      modelo: "CX-5",
      precio: 29000,
      tipoMotor: "Gasolina",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/2018_Mazda_CX-5_SE-L_NAV%2B_Diesel_2.2_Front.jpg/640px-2018_Mazda_CX-5_SE-L_NAV%2B_Diesel_2.2_Front.jpg"
    },
    {
      id: 120,
      fabricante: "Citroën",
      modelo: "C4",
      precio: 22000,
      tipoMotor: "Diésel",
      fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Citroen_C4_%282020%29_IMG_3967.jpg/640px-Citroen_C4_%282020%29_IMG_3967.jpg"
    }
  ];
  viewMode: string = "table"

  private garage = inject(Garage)

  addCarToGarage(oneCar:any) {
    //acceder al servicio y pedirle que guarde en el array de favs este coche clicado
    this.garage.addCarToMyCars(oneCar)
  }
  
  getCoches() {
    return this.inventarioCoches
  }

  isAlreadyInMyGarage(oneCar:any) {
    return this.garage.isAlreadyInMyCars(oneCar)
  }

  ordenarPorPrecio() {
    this.inventarioCoches.sort((a, b) => a.precio - b.precio);
  }

  removeCarToGarage(oneCar:any) {
    this.garage.removeCarFromMyCars(oneCar)
  }

  setViewMode(newViewMode: string) {
    this.viewMode = newViewMode;
  }

}
