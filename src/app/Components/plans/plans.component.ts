import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  //#region Local Variables
    products:any;

  //#endregion

  constructor( private service: SharedService,) { }

  ngOnInit(): void {
    this.listAllProducts();

  }
  
  //#region getting all products function
  listAllProducts(){
    this.service.getProducts().subscribe(res => {
      this.products = res;
      //console.log(this.products);
      
    })
  }
  //#endregion


}
