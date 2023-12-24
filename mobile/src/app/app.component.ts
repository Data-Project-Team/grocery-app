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
    .then(function (response:any){
      localStorage.setItem("usr_apikey", response.data.initcode);
      localStorage.setItem("usr_initcode",response.data.initid);
      localStorage.setItem("usr_cipher",response.data.initcipher);
      console.log("success init");
    });
    
    }
    const key = localStorage.getItem("usr_apikey");
    const id = localStorage.getItem("usr_code");
    const cipher = localStorage.getItem("usr_cipher");
    if (key && id && cipher === '1' ) {
      this.router.navigate(['pages/hometab'],{replaceUrl: true});
    }else{
      this.router.navigate(['login'],{replaceUrl: true});
    }
  }

}
