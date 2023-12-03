import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolverService {

  constructor(private data:DataService) { }
  resolve: ResolveFn<any> = (route:ActivatedRouteSnapshot) => {
    const url=route.paramMap.get('id');
    return this.data.getData(url)
  }
}
