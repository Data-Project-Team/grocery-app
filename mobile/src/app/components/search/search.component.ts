import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { NavigationEnd, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { filter } from 'rxjs';



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

  onSearch(event:any) {
    const term = event.target.value;
    // Clear previous search results
    this.searchResults = [];
    this.search.searchProducts(term)
      .then((response: any) => {
          if(response.msg === 'success'){
            this.searchResults = response.data
          }  
        },
        (error) => {
          console.log('Not found');
        }
      );  
    }
    onKeyPress(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        // Navigate to the product page with all searched products
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

