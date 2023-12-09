import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, pipe, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {
  
  searchResults: any = [];
  showResults = false;
  constructor(
    private search: SearchService, 
    private router: Router,
    public data: DataService
  ) {
   
   
  }

  ngOnInit() {}
  
  onSearch(event:any) {
  const term = event.target.value;
  // Clear previous search results
  this.searchResults = [];
  this.search.searchProducts(term)
    .then((response: any) => {
        if(response.msg === 'success'){
          this.searchResults = response.data
          console.log(this.searchResults);
        }  
      },
      (error) => {
        console.log('Not found');
      }
    );  
  }
   

  gotodetails(item:any){
    this.data.setData("i", item);
    this.router.navigate(['pages/home/details/i']);
  }
  onInputFocus(){
    this.showResults = true;
  }
  onInputBlur(){
    this.showResults = false;
  }
}

