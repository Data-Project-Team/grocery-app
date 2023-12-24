import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { NavigationEnd, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { filter } from 'rxjs';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  searchResults: any = [];
  showResults = false;
  constructor(
    
    private search: SearchService, 
    private router: Router,
    public data: DataService
    
  ) {
    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(() => {
      this.clearSearch();
    });
  }


  ngOnInit(): void {
  }

  onSearch(event: any) {
    const input = event.target.value;
    this.searchResults = [];
  
    let searchTerm: string = '';
    let minPrice: number | undefined;
    let maxPrice: number | undefined;
  
    // Check if the input contains a number and a hyphen (to infer it's a price range)
    const containsPriceRange = /\d+\s*-\s*\d+/.test(input);
  
    if (containsPriceRange) {
      // Extracting the price range
      const priceRange = input.match(/\d+(\.\d+)?/g);
      if (priceRange && priceRange.length === 2) {
        minPrice = parseFloat(priceRange[0]);
        maxPrice = parseFloat(priceRange[1]);
      }
    } else {
      // If no price range detected, consider the whole input as the search term
      searchTerm = input.trim();
    }
  
    const searchParams = {
      term: searchTerm,
      min_price: minPrice,
      max_price: maxPrice
    };
  
    this.search.searchProducts(searchParams)
      .then((response: any) => {
        if (response.msg === 'success') {
          this.searchResults = response.data;
        }
      })
      .catch((error) => {
        console.log('Not found');
      });
  }  
    onKeyPress(event: KeyboardEvent) {
      console.log(this.searchResults);
      console.log(event.key);
      if (event.key === 'Enter' && this.searchResults && this.searchResults.length > 0) {
        this.router.navigate(['pages/productspage'], { queryParams: { 
          products: JSON.stringify(this.searchResults) 
        } });
        
      }
      
    }
    clearSearch() {
      this.searchQuery = ''; // Clear search query
      this.searchResults = []; // Clear search results
    }
  
    gotodetails(item:any){
      this.data.setData("i", item);
      this.router.navigate(['pages/hometab/details/i']);
    }
    onInputFocus(){
      this.showResults = true;
    }
    onInputBlur(){
      this.showResults = false;
    }
  
}

