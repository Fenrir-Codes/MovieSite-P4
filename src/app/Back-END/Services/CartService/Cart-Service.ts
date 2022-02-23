import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from 'src/app/Interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  cartSubject = new Subject();
  product: IProduct[] = [];

  constructor() {}

  addToCart(item: IProduct) {
    this.product.push(item);

  }

  getItems() {
    return this.product;
  }

  clearCart() {
    this.product = [];
    return this.product;
  }

}