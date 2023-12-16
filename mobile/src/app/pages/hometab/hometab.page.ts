import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { DataService } from '../../services/data.service';
import { ApiService } from 'src/app/services/api.service';


register();
@Component({
  selector: 'app-home',
  templateUrl: './hometab.page.html',
  styleUrls: ['./hometab.page.scss'],
})
export class HometabPage implements OnInit {
  categories = [
    //grocery categories and their pictures 
  ];

  trending: any = [];
  onSale: any = [];
  isLoading:boolean = false;
  liked!:boolean;
  
  constructor(private router: Router, public data:DataService, public api: ApiService)  {
    
   }

   /// fetching respose 
   ngOnInit() {
    this.fetchTrendingProducts();
    this.fetchOnSale();
  }
  
  fetchTrendingProducts(){
    const action = "fetchproducts";
    const usrCode = localStorage.getItem("usr_code");
    const data = '&usrCode='+usrCode + '&fetchby=trending';

    this.api.getData(action, data).then(
      (response: any) => {
        console.log(response);
        if(response.msg === 'success'){
          this.trending = response.data;
          this.isLoading=true;
          console.log("Success Fetching Trending Products")
        } else {
          this.trending = []
          this.isLoading=false;
        }  
      },
      (error) => {
        console.error('Error Fetching Trending Products:', error);
      }
    );
  }

  fetchOnSale(){
    const action = "fetchproducts";
    const usrCode = localStorage.getItem("usr_code");
    const data = '&usrCode='+usrCode + '&fetchby=onSale';

    this.api.getData(action, data).then(
      (response: any) => {
        if(response.msg === 'success'){
          this.onSale = response.data;
          this.isLoading=true;
          console.log("Success Fetching Products")
        } else {
          this.trending = []
          this.isLoading=false;  
        }  
      },
      (error) => {
        console.error('Error Fetching OnSale Products:', error);
      }
    );
  }

  
 
}