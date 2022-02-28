import { Injectable } from '@angular/core';
import { LocalService } from 'src/app/Back-END/Services/Storage-Crypting/local.service';

@Injectable({
  providedIn: 'root',
})
export class Tokenservice {

  constructor(private LocalService: LocalService) {}


  removeUserUpdateToken(){
    return this.LocalService.removeItem('userUpdateToken')
  }

  // this can remove one token i use it to remove KEY userToken from storage
  removeUserToken(){
    return this.LocalService.removeItem('userToken')
  }

  getAdminToken() {
    return this.LocalService.getJsonValue('adminToken');
  }

  getUserToken() {
    return this.LocalService.getJsonValue('userToken');
  }

  getCartToken() {
    return this.LocalService.getJsonValue('productInCart');
  }

  getUserUpdateToken() {
    return this.LocalService.getJsonValue('userUpdateToken');
  }

  getMovieUpdateToken() {
    return this.LocalService.getJsonValue('movieUpdateToken');
  }

  removeMovieUpdateToken(){
    return this.LocalService.removeItem('movieUpdateToken')
  }

  removeCartToken(){
    return this.LocalService.removeItem('productInCart')
  }

  /*this function read the 'token' value from the session storage  */
  deCryptKey() {
    return this.LocalService.getJsonValue('token');
  }

  //remove all tokens
  removeToken(){
    return this.LocalService.clearToken();
  }

  //#region setter's

  enCryptKey(token: string, value: any) {
    return this.LocalService.setJsonValue(token, value);
  }

  setUserToken(userToken: string, value: any) {
    return this.LocalService.setJsonValue(userToken, value);
  }








  //#endregion
}
