import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  cartSubject = new Subject();

  constructor() {}

  sendMsg(product){
    this.cartSubject.next(product); // Triggering an event
  }

  getMsg(){
    //Anyone calls the getMsg function ,can subscribe to whatever is triggered
    return this.cartSubject.asObservable();
  }

}