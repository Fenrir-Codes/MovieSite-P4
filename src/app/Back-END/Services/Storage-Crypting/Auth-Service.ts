import { Injectable } from '@angular/core';
import { LocalService } from 'src/app/Back-END/Services/Storage-Crypting/local.service';

@Injectable({
  providedIn: 'root',
})
export class Authservice {

  constructor(private LocalService: LocalService) {}

  
  /* this function sets the encrypted json values to session storage */
  enCryptKey(token: string, value: any) {
    return this.LocalService.setJsonValue(token, value);
  }
  setUserToken(userToken: string, value: any) {
    return this.LocalService.setJsonValue(userToken, value);
  }
  /*this function read the 'token' value from the session storage  */
  deCryptKey() {
    return this.LocalService.getJsonValue('token');
  }
  getUserToken() {
    return this.LocalService.getJsonValue('userToken');
  }
  //remove all tokens
  removeToken(){
    return this.LocalService.clearToken();
  }
 // this can remove one token i use it to remove KEY userToken from storage
  removeItem(){
    return this.LocalService.removeItem('userToken')
  }
}
