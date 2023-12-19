import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../../services/api.service'; // Adjust the path as needed

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  passwords = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  };

  constructor(
    private modalController: ModalController,
    private api: ApiService // Adjust as needed
  ) {}

  async changePassword() {
    if (this.passwords.newPassword !== this.passwords.confirmNewPassword) {
      // Handle password mismatch
      console.error('Passwords do not match');
      return;
    }

    const usr_code = localStorage.getItem("usr_code");
    const action = "changePassword"; // Replace with your actual API action
    const data = `&oldPassword=${this.passwords.oldPassword}&newPassword=${this.passwords.newPassword}&userid=${usr_code}`;

    this.api.getData(action, data).then(
      (response: any) => {
        if (response.msg === "success") {
          this.modalController.dismiss();
          // Optionally, redirect or show a success message
        } else {
          // Handle error
          console.error('Password change failed:', response.msg);
          // Optionally, show an error message to the user
        }
      },
      (error) => {
        // Handle network or other errors
        console.error('API call error:', error);
        // Optionally, show an error message to the user
      }
    );
    await this.modalController.dismiss(this.passwords);
  }
}
