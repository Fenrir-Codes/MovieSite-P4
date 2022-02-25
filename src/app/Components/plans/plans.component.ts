import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { IProduct } from 'src/app/Interfaces/IProduct';
import { CartService } from 'src/app/Back-END/Services/CartService/Cart-Service';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';
import { Tokenservice } from 'src/app/Back-END/Services/Storage-Crypting/TokenService';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  //#region Local Variables
  products: any;

  //#endregion

  constructor(private service: SharedService,
    private cartService: CartService,
    private dialog: MatDialog,
    private tokenService: Tokenservice) { }

  ngOnInit(): void {
    this.listAllProducts();

  }

  //#region getting all products function
  listAllProducts() {
    this.service.getProducts().subscribe(res => {
      this.products = res;
      //console.log(this.products);

    })
  }
  //#endregion

  //#region Add to cart function
  addToCart(product: IProduct) {
    //putting the item to array
    this.cartService.addToCart(product);
    //console.log(product);

/*     this.dialog.open(CartComponent, {
      disableClose: true,
    }); */

    this.tokenService.enCryptKey('productInCart', product);

  }
  //#endregion

}
