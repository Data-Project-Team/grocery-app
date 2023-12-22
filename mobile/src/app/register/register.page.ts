import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  initid = localStorage.getItem("usr_apikey");
  initcode = localStorage.getItem("usr_code");
  
  
  constructor(private api: ApiService, private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      pwd: ['', Validators.required],
      
    });
    
   }
  ngOnInit() {
  }
  submitForm(){
    if (this.registerForm.valid) {
      const email = this.registerForm.value.email;
      const pwd = this.registerForm.value.pwd;
      const name = this.registerForm.value.name;
      const action = "registeruser";
      const data = "&apikey="+this.initid+"&usname="+email+"&pwd="+pwd+"&name="+name+"&userid="+this.initcode;
      this.api.getData(action, data).then(
        (response:any) => {
          console.log(response);

          if(response.msg ==="success"){
            localStorage.setItem("usr_apikey", response.data.USR_APIKEY);
            localStorage.setItem("usr_code", response.data.USR_CODE);
            this.router.navigate(['login']);
          }
        }
      )  
    }
  
  }

}
