import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './productspage.page.html',
  styleUrls: ['./productspage.page.scss'],
})
export class ProductspagePage  {
  @ViewChild('modal')modal!: IonModal;

  products:any = [];
  fromsearch = false;
  params: string = '';
  ctgname: string = '';
  isLoading:boolean = false;
  currentSort: string = '';
  currentSortLabel: string = 'Sort'; 

  sortingOptions = [
    { label: 'Popular', value: 'trending' },
    { label: 'Newest', value: 'newest' },
    { label: 'Price: lowest to high', value: 'ascending' },
    { label: 'Price: highest to low', value: 'descending' }
  ];

  options:any =[];

  priceRange = { lower: 0, upper: 500 }; 
  selectedBrand: string = '';
  selectedOrigin: string = '';
  selectedSort: string = '';
 
  
  
  constructor(public api: ApiService, public data: DataService, private router: Router, private route:ActivatedRoute) {
    
    this.route.queryParams.subscribe((params) => {
      if (params) {
        this.products = JSON.parse(params['products']);
        console.log(this.products)
        this.fromsearch=true;
        // If products exist from search, display them
        if (this.products && this.products.length > 0) {
          this.isLoading = true;
        }
      }
    });
    const catinfo: any = this.data.getData("i");
    if (catinfo){
    this.params = catinfo.id;
    this.ctgname= catinfo.name;
    }

    
   }

   ionViewDidEnter(){
    console.log(this.fromsearch);
    if (this.fromsearch === false) {
      this.fetchProductsByParams();
      this.fetchoptions();
    } 
  
  }

  fetchProductsByParams(){
    const action = "fetchproducts";
    const usrCode = localStorage.getItem("usr_code");
    const data = '&categoryId=' + this.params + '&usrCode=' + usrCode;

    this.products=[];
    this.api.getData(action, data).then(
      (response: any) => {
        if(response.msg === 'success'){
          this.products = response.data;
          this.isLoading = true;
        }else{
          this.products = [];
        }
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  fetchoptions(){
    const action = "filteroptions";
    const data = '&categoryId=' + this.params;

    this.products=[];
    this.api.getData(action, data).then(
      (response: any) => {
        if(response.msg === 'success'){
          this.options = response.data
        }
      },
      (error) => {
        console.error('Error fetching options:', error);
      }
    );
  }


 
  openModal() {
    this.modal.present(); // Show the modal
  }
  onPriceRangeChange(event: any) {
    this.priceRange = event.detail.value;
  }
  applyFilters() {
    const filters = {
      brand: this.selectedBrand,
      priceRange: this.priceRange,
      origin: this.selectedOrigin,
      sort: this.selectedSort
    };
  
    const action = "filter";
    const usrCode = localStorage.getItem("usr_code");
    let data = `&usrCode=${usrCode}&categoryId=${this.params}`;
    data += `&min=${filters.priceRange.lower}&max=${filters.priceRange.upper}`;
    if (filters.brand) {
      data += `&brand='${filters.brand}'`;
    }
  
    if (filters.origin) {
      data += `&origin='${filters.origin}'`;
    }
  
    if (filters.sort) {
      data += `&sortby=${filters.sort}`;
    }
  
    console.log(data);
  
    this.api.getData(action, data).then(
      (response:any) => {
        if (response.msg === 'success') {
          this.products = response.data;
          this.isLoading = true;
          this.modal.dismiss(); 
        } else {
          this.products = [];
        }
      },
      (error) => {
        console.error('Error applying filters:', error);
      }
    );
  }
  
  resetFilters() {
    this.selectedBrand = '';
    this.priceRange = { lower: 0, upper: 500 }; // Reset to default values
    this.selectedOrigin = '';
    this.selectedSort='';
    this.fetchProductsByParams();
    this.modal.dismiss(); 
 }
}
