import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  totalPrice: number =  0;
  cartItem:any = [];
  constructor(public data: DataService, public api:ApiService) {}

  getCart(){
  //   let cart = localStorage.getItem('Cart') as string;
  //   return JSON.parse(cart);
   const action = "getusercart";
    const usrCode = localStorage.getItem("usr_code");
    const data = '&usrCode=' + usrCode;
    return this.api.getData(action, data);
   
  }
  // putCart(data:any){
  //   return localStorage.setItem("Cart", JSON.stringify(data));
  // }
  addToCart(prodId: any){
    
    // let cart = this.getCart();

    // const itemexists = cart.findIndex((item: { id: any; }) => item.id === product.id );
    const action = "addtocart";
    const usrCode = localStorage.getItem("usr_code");
    const data = '&prodId=' + prodId + '&usrCode=' + usrCode;
    console.log(data);
    this.api.getData(action, data).then(
      (response: any) => {
        if(response.msg === 'success'){
          console.log("added to cart successfuly")
        }else{
          console.log("failed to add to cart")
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    
  }
  removeCart(ProdId: any){
    // let cart = this.getCart();

    // const updatedCart = cart.filter((item: { id: any; })=> item.id !== ProdId);

    // this.putCart(updatedCart);

    const action = "removefromcart";
    const usrCode = localStorage.getItem("usr_code");
    const data = '&prodId=' + ProdId + '&usrCode=' + usrCode;
    this.api.getData(action, data).then(
      (response: any) => {
        if(response.msg === 'success'){
          console.log("removed to cart successfuly")
        }else{
          console.log("failed to remove cart")
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    
  }
//   updateTotal():any{
//     this.totalPrice=  0;
//     // let cart = JSON.parse(localStorage.getItem('Cart') as string);
    
//     // for (let i = 0; i < cart.length; i++) {
//     //   const price = cart[i].final_price;
//     //   this.totalPrice += price* cart[i].quantity;
      
//     // }

//     this.getCart();
//     for (const item of this.cartItem) {
      
//       if (item) {
//         const itemPrice = item.final_price * item.quantity;
//         this.totalPrice += itemPrice;
//       }

//     return this.totalPrice;
//   }
  

// }
updateCartItemQuantity(cartItemId: number, quantity: number) {
  const action = "updatecart";
  const usrCode = localStorage.getItem("usr_code");
  const data = '&prodId=' + cartItemId + '&usrCode=' + usrCode + '&quantity=' + quantity ;
  return this.api.getData(action, data);
}

}