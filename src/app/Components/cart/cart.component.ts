import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/Back-END/Services/CartService/Cart-Service';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { Tokenservice } from 'src/app/Back-END/Services/Storage-Crypting/TokenService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [DatePipe]
})
export class CartComponent implements OnInit {
  item:any;
  user:any;
  isRemoved:boolean = true;

  constructor(private cartService: CartService,
    private tokenService: Tokenservice,
    private service: SharedService,
    private dialog: MatDialog,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getUserAndTimeData();
    this.getItems();
  
  }

  getUserAndTimeData(){
    this.getUserTokenData();
  }

  getUserTokenData(){
    this.user = this.tokenService.getUserToken();
  }

  getItems(){
    this.item = this.tokenService.getCartToken();
    console.log(this.item);
    

   /* if (this.item == null) {
      this.isRemoved = true;
    }
    else {
      this.isRemoved = false;
    } */
    //console.log(this.item);
    
  }

  extendSubscription(id, body){
    this.service.updateSubscription(id, body).subscribe(res => {

    })
  }

  removeItem(){
    this.cartService.clearCart();
    this.tokenService.removeCartToken();
    this.dialog.closeAll();
    
  }

}
