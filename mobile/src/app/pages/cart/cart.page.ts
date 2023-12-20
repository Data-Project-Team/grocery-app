import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IonModal } from '@ionic/angular';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  @ViewChild('modal')modal!: IonModal;
  cartItems : any = [];
  modalItem:any;
   // Total initialized as 0
   total: number = 0;
  ngOnInit() {
    this.viewCart();
    this.updateTotal();
  }
  ionViewDidEnter (){
    this.viewCart();
    this.updateTotal();
  }
  constructor(public cart: CartService, private api: ApiService) {
    var item!:any;
    for (item in this.cartItems){
      if (item.quantity === 0  ){
        this.removeItem(item);
      }
    }
  }
 

  viewCart(){
    this.cart.getCart().then(
      (response: any) => {
        // console.log(response);
        if(response.msg === 'success'){
          this.cartItems = response.data;
          this.updateTotal();
          
        }else{
          console.log("failed to get cart")
        }
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
   
  }
  removeItem(prod:any){
    this.cart.removeCart(prod.id);
    const index = this.cartItems.findIndex((item: { id: any; }) => item.id === prod.id);
  
    if (index !== -1) {
      this.cartItems.splice(index, 1); // Remove the item from cartItems
      this.cart.removeCart(prod.id); // Remove the item from the cart in the service
      
      // Recalculate the total after removing the item
      this.updateTotal();
    }
  }
  onQuantityChanged(prod: any): void {
    const index = this.cartItems.findIndex((item: { id: any; }) => item.id === prod.id );
    if (index !== -1) {
      this.cartItems[index] = prod;
      this.updateTotal(); // Recalculate the total after updating the quantity
    }
  }
  
  

    openModal(item:any) {
      this.modalItem = item;
      this.modal.present(); // Show the modal
    }

    updateTotal(): void {
      // Reset total to 0 before recalculating
      this.total = 0;
  
      // Loop through cart items and calculate total based on price and quantity
      for (const item of this.cartItems) {
        this.total += item.final_price * item.quantity;
      }
  }

  checkout(): void {
    const usrCode = localStorage.getItem("usr_code");

    for (const item of this.cartItems) {
      const action = "check_out";
      const data = `&usrCode=${usrCode}&prodId=${item.id}`;

      this.api.getData(action, data)
        .then(
          (response: any) => {
            if (response.msg === "success") {
              console.log('Checkout Successful for prodId:', item.id);
              this.cart.removeCart(item.id);
              this.cartItems = [];
              this.updateTotal();
            } else {
              console.error('Checkout Failed for prodId:', item.id);
              // Handle the error, show a message to the user, etc.
            }
          },
          (error) => {
            console.error('Checkout Failed for prodId:', item.id, error);
            // Handle the error, show a message to the user, etc.
          }
        );
    }
  }
           


  
}
