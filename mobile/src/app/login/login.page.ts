import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formData = {
    email: '',
    pwd: '',
  };

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
  }

  login() {

    const usr_code = localStorage.getItem("usr_code");
    const action = "loginuser";
    const data =
      "&usname=" + this.formData.email +
      "&pwd=" + this.formData.pwd +
      "&userid=" + usr_code;

    this.api.getData(action, data
    ).then(
      (response: any) => {

        if (response.msg === "success") {
          localStorage.setItem("usr_email", response.data.USR_EMAIL);
          localStorage.setItem("usr_apikey", response.data.USR_APIKEY);
          localStorage.setItem("usr_code", response.data.USR_CODE);
          this.router.navigate(['/pages/hometab']);
        }
      }

    )



  }

}
