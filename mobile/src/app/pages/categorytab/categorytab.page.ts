import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-categorytab',
  templateUrl: './categorytab.page.html',
  styleUrls: ['./categorytab.page.scss'],
})
export class CategorytabPage implements OnInit {
  /*
  products: any[] = [
    { name: 'Fruits', image: 'assets/fruits.png' },
    { name: 'Vegetables', image: 'assets/vegestables.png' },
    { name: 'Canned Goods', image: 'assets/canned-food.png' },
    { name: 'Dairy', image: 'assets/dairy.jpg' },
    { name: 'Meat', image: 'assets/meat.jpg' },
    { name: 'Frozen Foods', image: 'assets/frozen_foods.jpg' },
    { name: 'Pasta,Rice & Cereal', image: 'assets/rice_cereal.jpg' },
    { name: 'Beverages', image: 'assets/beverages.jpg' },
    { name: 'Bread & Bakery', image: 'assets/bread_bakery.jpg' },
    { name: 'Snacks', image: 'assets/snacks.jpg' },
    { name: 'Condiments & Spices', image: 'assets/condiments_spices.jpg' },
    { name: 'Fish & Seafood', image: 'assets/fish_seafood.jpg' },
  ];
  */

  // Ensure the structure of your categories array is like this:
  categories: any = [];

  constructor(private router: Router, private api: ApiService, public data: DataService) { }

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    const action = "fetchcategory";
    const data = '';

    this.api.getData(action, data).then(
      (response: any) => {
        console.log(response);
        if (response.msg === 'success') {
          this.categories = response.data;
        } else {
          this.categories = [];
        }
      },
      (error:any) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
}

