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
      alert('Passwords do not match'); 
      return;
    }
    console.log("passwords match")
    

    const userId = localStorage.getItem("usr_code");
    const username = localStorage.getItem("usr_email");

    if (!userId || !username) {
      alert('User ID is missing');
      return;
    }
    const action = "changepassword"; 

    const data = 
                 `&oldPassword=${encodeURIComponent(this.passwords.oldPassword)}` +
                 `&newPassword=${encodeURIComponent(this.passwords.newPassword)}` +
                 `&username=${encodeURIComponent(username)}` +
                 `&userid=${encodeURIComponent(userId)}`;
    
    this.api.getData(action, data).then(
      (response: any) => {
        if (response.msg === "success") {
          alert('Password successfully changed'); 
          this.modalController.dismiss();
        } else {
          console.log(this.passwords)
          console.log(response)
          alert(`Password change failed: ${response.msg}`); 
        }
      },
      (error) => {
        alert('API call error: ' + error); 
      }
    );
  }
}
