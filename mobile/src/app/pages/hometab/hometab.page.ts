import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.page.html',
  styleUrls: ['./hometab.page.scss'],
})
export class HometabPage implements OnInit {
  categories = [
    { name: 'Fashion', icon: 'fashion.jpg' },
    { name: 'Accessories', icon: 'favicon.png' },
    { name: 'Electronics', icon: 'electronics.png' },
    { name: 'Beauty and Personal Care', icon: 'favicon.png' },
    { name: 'Sports and Outdoors', icon: 'sports.png' },
    { name: 'Health and Wellness', icon: 'favicon.png' },
    
  ];
  trending: any = [];
  onSale: any = [];
  isLoading:boolean = false;
  liked!:boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
