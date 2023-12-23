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
    nameOnCard: '' , 
    expirationDate: '',
    cvv: ''
  };

  constructor(
    private modalController: ModalController,
    private api: ApiService 
  ) {}

  async submitPaymentMethod() {
    const usr_code = localStorage.getItem("usr_code")!;
    const action = "paymentmethod"; 

    const data = 
                 `&cardnumber=${encodeURIComponent(this.paymentMethod.cardNumber)}` +
                 `&nameoncard=${encodeURIComponent(this.paymentMethod.nameOnCard)}` +
                 `&expirationdate=${encodeURIComponent(this.paymentMethod.expirationDate)}` +
                 `&cvv=${encodeURIComponent(this.paymentMethod.cvv)}` +
                 `&userCode=${encodeURIComponent(usr_code)}`;

    this.api.getData(action, data).then(
      (response: any) => {
        if (response.msg === "success") {
          this.modalController.dismiss(this.paymentMethod);

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

    
  }
  
  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }


}
