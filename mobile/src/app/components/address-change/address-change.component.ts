import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';


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
    zip: ''
  };
  constructor(private modalController: ModalController) {}

  async submitAddress() {
    await this.modalController.dismiss(this.address);
  }
}
