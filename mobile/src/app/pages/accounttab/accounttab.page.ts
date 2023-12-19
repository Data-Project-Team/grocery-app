import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddressChangeComponent } from '../../components/address-change/address-change.component'; // Import your address change page
import { PaymentMethodChangeComponent } from '../../components/payment-method-change/payment-method-change.component'; // Import your address change page
import { SettingsComponent } from '../../components/settings/settings.component'; // Import your address change page


@Component({
  selector: 'app-account',
  templateUrl: './accounttab.page.html',
  styleUrls: ['./accounttab.page.scss'],
})
export class AccounttabPage implements OnInit {
  userInfo : any  = [];
  constructor(public api:ApiService, public data: DataService, private router: Router , private modalController: ModalController) { }
  
  ngOnInit() {
    this.getUserInfo();
  }


  async openAddressChange() {
    const modal = await this.modalController.create({
      component: AddressChangeComponent,
      
    });
    await modal.present();

  const { data } = await modal.onWillDismiss();
  if (data) {
    // Update the address in your component's state or send it to the backend
    //this.userAddress = data;
  }
  }

  async openPaymentMethodChange() {
    const modal = await this.modalController.create({
      component: PaymentMethodChangeComponent,
      // Pass any data you need
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }

  async openSettings() {
    const modal = await this.modalController.create({
      component: SettingsComponent,
      // Pass any data you need
    });
     await modal.present();
     const { data } = await modal.onWillDismiss();
  }

  getUserInfo(){
    const action = "getUserInfo";
    const usrCode = localStorage.getItem("usr_code");

  if (!usrCode) {
    
    console.error('User code is missing.');
    return;
  }

  const data = '&usrCode=' + usrCode; 
  this.api.getData(action, data).then(
    (response: any) => {
      if (response && response.data) {
        this.userInfo = response.data;  
        console.log('get user data successfully ')   
        console.log(this.userInfo)   
      } else {
        
        console.error('Invalid response from server.');
      }
    },
    (error) => {
      
      console.error('Error fetching user info:', error);
    }
  );

  
  
  }

  logout(){
    const action = "logout";
    const usrCode = localStorage.getItem("usr_code");
    const now = new Date();
    const data = '&logout='+"true"+'&userid='+usrCode+'&currentdate='+now.toUTCString();

    this.api.getData(action, data).then(
      (response: any) => {
        if(response.msg === 'success'){
          localStorage.clear();
          if (!localStorage.getItem("usr_apikey")){
            const action = "initapps";
            this.api.initApp(action)
          .then(function (response:any){
            localStorage.setItem("usr_apikey", response.data.initcode);
            localStorage.setItem("usr_code",response.data.initid);
            localStorage.setItem("usr_cipher",response.data.initcipher);
            localStorage.setItem("Cart", "[]")
          });
          this.router.navigate(['login']);
        }
      
        }
      },
      (error) => {
        console.error('Error using logout api:', error);
      }
    );
  }
}
