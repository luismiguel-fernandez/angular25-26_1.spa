import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { Cart } from './cart/cart';
import { Error404 } from './error404/error404';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'products', component: Products },
    { path: 'cart', component: Cart },
    { path: '**', component: Error404 }
];
