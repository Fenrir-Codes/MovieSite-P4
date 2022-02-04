import { Injectable } from '@angular/core';
import { LocalService } from 'src/app/Back-END/Services/Storage-Crypting/local.service';

@Injectable({
  providedIn: 'root',
})
export class Tokenservice {

  constructor(private LocalService: LocalService) {}

  
  /* this function sets the encrypted json values to session storage */
  enCryptKey(token: string, value: any) {
    return this.LocalService.setJsonValue(token, value);
  }

  setUserToken(userToken: string, value: any) {
    return this.LocalService.setJsonValue(userToken, value);
  }

  setUserUpdateToken(userUpdateToken: string, value: any) {
    return this.LocalService.setJsonValue(userUpdateToken, value);
  }

  removeUserUpdateToken(){
    return this.LocalService.removeItem('userUpdateToken')
  }

  // this can remove one token i use it to remove KEY userToken from storage
  removeUserToken(){
    return this.LocalService.removeItem('userToken')
  }

  getUserToken() {
    return this.LocalService.getJsonValue('userToken');
  }

  getUserUpdateToken() {
    return this.LocalService.getJsonValue('userUpdateToken');
  }

  /*this function read the 'token' value from the session storage  */
  deCryptKey() {
    return this.LocalService.getJsonValue('token');
  }

  //remove all tokens
  removeToken(){
    return this.LocalService.clearToken();
  }

}
