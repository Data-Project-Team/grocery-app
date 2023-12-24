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
  searchProducts(searchParams: any) {
    const { term, min_price = '', max_price = '' } = searchParams;
    const action = "search";
    let data = ``;
    if (term !== '' ) {
      data += `&term=${term}`;
    }
    
    if (min_price !== '' && max_price !== '') {
      data += `&min_price=${min_price}&max_price=${max_price}`;
    }
    return this.api.getData(action, data);
    
  }
}
