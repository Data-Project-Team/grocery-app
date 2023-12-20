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
  

  trending: any = [];
  onSale: any = [];
  isLoading:boolean = false;
  liked!: boolean;
  categories: any = [];
  egypt: any = [];

  
  constructor(private router: Router, public data:DataService, public api: ApiService)  {
   }

   /// fetching respose 
  ngOnInit() {
    this.fetchCategories()
    this.fetchby('egypt')
    this.fetchby('trending')
    this.fetchby('onsale')
    // this.fetchTrendingProducts();
    // this.fetchOnSale();
  }



  fetchCategories() {
    const action = "fetchcategory";
    const data = '';

    this.api.getData(action, data).then(
      (response: any) => {
        // console.log(response);
        if (response.msg === 'success') {
          this.categories = response.data;

        } else {
          this.categories = [];
        }
      },
      (error: any) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
  fetchby(by:any){
    const action = "fetchproducts";
    const usrCode = localStorage.getItem("usr_code");
    let fetchby= by;
    const data = '&usrCode='+usrCode + '&fetchby='+fetchby;
    
    this.api.getData(action, data).then(
      (response: any) => {
        if(response.msg === 'success'){
          if (response.msg === 'success') {
            switch (by) {
              case 'egypt':
                this.egypt = response.data; 
                console.log("Success Fetching Origin Products");
                break;
              case 'onsale':
                this.onSale = response.data; 
                console.log("Success Fetching On Sale Products");
                break;
              case 'trending':
                this.trending = response.data; 
                console.log("Success Fetching Trending Products");
                break;
              default:
                break;
            }
          this.isLoading=true;
          console.log("Success Fetching Products")
        } else {
          switch (by) {
            case 'egypt':
              this.isLoading=false;
              this.egypt = [];
              break;
            case 'onsale':
              this.isLoading=false;
              this.onSale = [];
              break;
            case 'trending':
              this.isLoading=false;
              this.trending = [];
              break;
            default:
              break;
            }
          }
        }
      },
      (error) => {
        console.error('Error Fetching Products:', error);
      }
    );
  }
  

  routetoproduct(categoryId:any){
    this.data.setData('i',categoryId)
    this.router.navigate(['pages/hometab/productspage/i']);
  }

}
