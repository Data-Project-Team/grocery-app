import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-wishlisttab',
  templateUrl: './wishlisttab.page.html',
  styleUrls: ['./wishlisttab.page.scss'],
  
})
export class WishlisttabPage implements OnInit {
  wishlistItems : any = [];
  constructor(public data: DataService, private router: Router, public api: ApiService){
    
    
   }

  ngOnInit() {
   
  }

  ionViewDidEnter(){
    this.fetchwishlist();
  }
 
  fetchwishlist(){
    const action = "fetchwishlist";
    const usrCode = localStorage.getItem("usr_code");

    const data = '&usrCode='+ usrCode;


    // this.wishlistItems = [
    //   {
    //     id: 1,
    //     name: 'Apple',
    //     discount: 10, // percentage
    //     img: 'assets/apple.jpeg',
    //     price_before: '12.99',
    //     final_price: '10.99',
    //     // other necessary attributes...
    //   },
    //   {
    //     id: 2,
    //     name: 'Grapes',
    //     discount: 20, // no discount
    //     img: 'assets/grapes.jpeg',
    //     price_before: '20.50',
    //     final_price: '20.50',
    //     // other necessary attributes...
    //   },

    //   {
    //     id: 3,
    //     name: 'Orange',
    //     discount: 5, // no discount
    //     img: 'assets/orange.jpeg',
    //     price_before: '20.50',
    //     final_price: '20.50',
    //     // other necessary attributes...
    //   },
    //   {
    //     id: 4,
    //     name: 'Apple',
    //     discount: 8, // no discount
    //     img: 'assets/apple.jpeg',
    //     price_before: '20.50',
    //     final_price: '20.50',
    //     // other necessary attributes...
    //   },
    //   {
    //     id: 4,
    //     name: 'Apple',
    //     discount: 8, // no discount
    //     img: 'assets/apple.jpeg',
    //     price_before: '20.50',
    //     final_price: '20.50',
    //     // other necessary attributes...
    //   },
    //   {
    //     id: 4,
    //     name: 'Apple',
    //     discount: 8, // no discount
    //     img: 'assets/apple.jpeg',
    //     price_before: '20.50',
    //     final_price: '20.50',
    //     // other necessary attributes...
    //   },
    //   {
    //     id: 4,
    //     name: 'Apple',
    //     discount: 8, // no discount
    //     img: 'assets/apple.jpeg',
    //     price_before: '20.50',
    //     final_price: '20.50',
    //     // other necessary attributes...
    //   },
    //   {
    //     id: 4,
    //     name: 'Apple',
    //     discount: 8, // no discount
    //     img: 'assets/apple.jpeg',
    //     price_before: '20.50',
    //     final_price: '20.50',
    //     // other necessary attributes...
    //   },
    //   {
    //     id: 4,
    //     name: 'Apple',
    //     discount: 8, // no discount
    //     img: 'assets/apple.jpeg',
    //     price_before: '20.50',
    //     final_price: '20.50',
    //     // other necessary attributes...
    //   },
    //   // Add more items as needed
    // ];

   
    this.api.getData(action, data).then(
      (response: any) => {
        this.wishlistItems = response.data;

        
      }
    );
  }
  }
    
  
