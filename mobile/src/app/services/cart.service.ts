import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  totalPrice: number =  0;
  constructor(public data: DataService) {}
}
