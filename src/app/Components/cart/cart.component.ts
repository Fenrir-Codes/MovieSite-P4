import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/Back-END/Services/CartService/Cart-Service';
import { Tokenservice } from 'src/app/Back-END/Services/Storage-Crypting/TokenService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any;
  isRemoved:boolean = true;

  constructor(private cartService: CartService,
    private tokenService: Tokenservice,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  
  }

  removeItem(){
    this.cartService.clearCart();
    this.tokenService.removeCartToken();
    this.ngOnInit();
    this.dialog.closeAll();
    
  }

}
