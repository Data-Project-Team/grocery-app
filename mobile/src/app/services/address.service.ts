import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  
  constructor(private api: ApiService) {}

  changeAddress(usrCode : any , address: any): Promise<any> {
    const action = "changeaddress";

    const data = 
                 `&street=${encodeURIComponent(address.street)}` +
                 `&city=${encodeURIComponent(address.city)}` +
                 `&state=${encodeURIComponent(address.state)}` +
                 `&country=${encodeURIComponent(address.country)}`+
                 `&zip=${encodeURIComponent(address.zip)}`+
                 `&userCode=${encodeURIComponent(usrCode)}`;

    console.log("Sending data:", data);
   
    

    return this.api.getData(action, data);
  }

}
