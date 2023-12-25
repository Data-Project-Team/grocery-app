import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private data: ApiService, private router : Router) {
    if (!localStorage.getItem("usr_apikey")){
      const action = "initapps";
      this.data.initApp(action)
  .then((response: any) => {
    localStorage.setItem("usr_apikey", response.data.initcode);
    localStorage.setItem("usr_code", response.data.initid);
    this.data.updateApiKey(); // Call updateApiKey here
    console.log("success init");
  })
  .catch(error => {
    console.error("Error during initialization:", error);
  });
    
    }
  //   const key = localStorage.getItem("usr_apikey");
  //   const id = localStorage.getItem("usr_code");
  //   if (key && id !== '1') {
  //     this.router.navigate(['pages/home'],{replaceUrl: true});
  //   }else{
  //     this.router.navigate(['login'],{replaceUrl: true});
  //   }
  }

}
