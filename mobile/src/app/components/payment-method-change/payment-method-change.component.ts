import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../../services/api.service'; // Adjust path as needed

@Component({
  selector: 'app-payment-method-change',
  templateUrl: './payment-method-change.component.html',
  styleUrls: ['./payment-method-change.component.scss'],
})
export class PaymentMethodChangeComponent {
  paymentMethod = {
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  };

  constructor(
    private modalController: ModalController,
    private api: ApiService // Adjust as needed
  ) {}

  async submitPaymentMethod() {
    const usr_code = localStorage.getItem("usr_code");
    const action = "updatePaymentMethod"; // Replace with your actual API action
    const data = `&cardNumber=${this.paymentMethod.cardNumber}&expirationDate=${this.paymentMethod.expirationDate}&cvv=${this.paymentMethod.cvv}&userid=${usr_code}`;

    this.api.getData(action, data).then(
      (response: any) => {
        if (response.msg === "success") {
          this.modalController.dismiss(this.paymentMethod);
          // Optionally, redirect or show a success message
        } else {
          // Handle error
          console.error('Payment method update failed:', response.msg);
          // Optionally, show an error message to the user
        }
      },
      (error) => {
        // Handle network or other errors
        console.error('API call error:', error);
        // Optionally, show an error message to the user
      }
    );

    await this.modalController.dismiss(this.paymentMethod);
  }
}
