import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/Back-END/Services/Storage-Crypting/storage.service';


@Injectable({
  providedIn: 'root',
})

export class LocalService {
  constructor(private storageService: StorageService) {}

  // Set the encypted json data to local storage
  setJsonValue(token: string, value: any) {
    this.storageService.secureStorage.setItem(token, value);
  }
  // Get the json value from local storage
  getJsonValue(token: string) {
    return this.storageService.secureStorage.getItem(token);
  }
  // Clear the local storage
  clearToken() {
    return this.storageService.secureStorage.clear();
  }
  removeItem(item: string){
    return this.storageService.secureStorage.removeItem(item)
  }

}
