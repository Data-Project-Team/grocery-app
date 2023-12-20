import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { AddressService } from 'src/app/services/address.service';


@Component({
  selector: 'app-address-change',
  templateUrl: './address-change.component.html',
  styleUrls: ['./address-change.component.scss'],
})
export class AddressChangeComponent {
  address = {
    street: '',
    city: '',
    state: '',
    country: '',
    zip: ''
  };
  constructor(private modalController: ModalController , public api: ApiService , private addressService: AddressService) {}

  async submitAddress() {
    
    const usrCode = localStorage.getItem("usr_code");
    console.log("Updating address with data:", this.address);
    this.addressService.changeAddress(usrCode , this.address).then(
    response => {
      console.log("API Response:", response);
      if(response.msg === 'success'){
        console.log("Address updated success");
      } else {
        console.log("Failed to update ");
      }
    },
    error => {
      // Handle the error
      console.error('Error:', error);
    }
  );
  await this.modalController.dismiss(this.address);
}
}
