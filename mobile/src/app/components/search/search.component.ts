import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, pipe, switchMap } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {
  
  searchResults: any = [];
  showResults = false;
  constructor(
    
    private router: Router,
    
  ) {
   
   
  }

  ngOnInit() {}
  
  
}

