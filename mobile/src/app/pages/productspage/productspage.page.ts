import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
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

  brands = [
    { name: 'Grocera' },
    { name: 'Almarai' },
    { name: 'Juhayna' },
    { name: 'Heinz' }
  ];
  origins = [
    { name: 'Egypt' },
    { name: 'USA' },
    { name: 'France' },
    { name: 'Saudi Arabia' },
    { name: 'Emirates' },
  ];
  priceRange = { lower: 0, upper: 100 }; // Initialize with default values
  selectedBrand: string = '';
  selectedOrigin: string = '';
  selectedSort: string = '';
 
  
  
  constructor(public api: ApiService, public data: DataService, private router: Router) {
    
    const catinfo: any = this.data.getData("i");
    
    this.params = catinfo.id;
    this.ctgname= catinfo.name;
    
   }

   ionViewDidEnter(){
    this.fetchProductsByParams();
    console.log(this.params);
  
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
    const data = '&usrCode=' + usrCode +'&categoryId=' + this.params + '&brand=\''  + filters.brand + '\'&min=' + filters.priceRange.lower + '&max=' + filters.priceRange.upper + '&origin=\'' + filters.origin + '\'&sortby=' +filters.sort;
    console.log(data);
    this.api.getData(action, data).then(
      (response: any) => {
        console.log(response);
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
    this.priceRange = { lower: 0, upper: 100 }; // Reset to default values
    this.selectedOrigin = '';
    this.selectedSort='';
  }
   


  
  
}
