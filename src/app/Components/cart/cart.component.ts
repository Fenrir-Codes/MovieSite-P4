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
  item:any;
  isRemoved:boolean = true;

  constructor(private cartService: CartService,
    private tokenService: Tokenservice,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getItems();
  
  }

  getItems(){
    this.item = this.tokenService.getCartToken();

    if (this.item != null) {
      this.isRemoved = false;
    }
    console.log(this.item);
    
  }

  removeItem(){
    this.cartService.clearCart();
    this.tokenService.removeCartToken();
    this.ngOnInit();
    this.dialog.closeAll();
    
  }

}
