import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(public api : ApiService) { }
  searchProducts(term: string) {

    const action = "search";
    const data = '&term='+ term;

    return this.api.getData(action, data);
    
  }
}
