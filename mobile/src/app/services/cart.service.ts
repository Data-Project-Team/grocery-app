import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  totalPrice: number =  0;
  constructor(public data: DataService) {}

  getCart(){
    let cart = localStorage.getItem('Cart') as string;
    return JSON.parse(cart);
  }
  putCart(data:any){
    return localStorage.setItem("Cart", JSON.stringify(data));
  }
  addToCart(product: { id: any; }){
    let cart = this.getCart();

    const itemexists = cart.findIndex((item: { id: any; }) => item.id === product.id );


    if (itemexists !== -1) {
      cart[itemexists].quantity += 1;
    } else {
      cart.push(product);
    }
    this.putCart(cart);
    this.updateTotal();
  }

}
