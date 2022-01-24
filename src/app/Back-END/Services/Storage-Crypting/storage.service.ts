import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import * as SecureStorage from 'secure-web-storage';

/* https://www.npmjs.com/package/secure-web-storage */
/* https://www.npmjs.com/package/crypto-js */

const SECRET_KEY:any = 'secret_key';


@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor() {}

  public secureStorage = new SecureStorage(sessionStorage, {
    hash: function hash(token): any {
      token = CryptoJS.SHA256(token, SECRET_KEY);
      return token.toString();
    },
    // Encrypt the localstorage data
    encrypt: function encrypt(data) {
      data = CryptoJS.AES.encrypt(data, SECRET_KEY);
      data = data.toString();
      return data;
    },
    // Decrypt the encrypted data
    decrypt: function decrypt(data) {
      data = CryptoJS.AES.decrypt(data, SECRET_KEY);
      data = data.toString(CryptoJS.enc.Utf8);
      return data;
    },
  });
}
