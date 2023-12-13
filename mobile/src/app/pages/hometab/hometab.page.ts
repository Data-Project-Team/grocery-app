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
export class HometabPage {
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
  
 
}
