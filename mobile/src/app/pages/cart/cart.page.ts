import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  @ViewChild('modal')modal!: IonModal;
  cartItems : any = [];
  modalItem:any;
  ngOnInit() {
    

  }
  ionViewDidEnter (){
    this.viewCart();
    this.cart.updateTotal();
  }
  constructor(public cart: CartService){
    var item!:any;
    for (item in this.cartItems){
      if (item.quantity === 0  ){
        this.removeItem(item);
      }
    }
  }

  viewCart(){
    this.cartItems = this.cart.getCart();
  }
  removeItem(prod:any){
    
      this.cartItems = this.cart.removeCart(prod.id);
      this.viewCart();
      this.cart.updateTotal();
    
  }
  onQuantityChanged(prod: any) {
    this.cartItems = this.cart.getCart();
    const index = this.cartItems.findIndex((item: { id: any; }) => item.id === prod.id );
    this.cartItems[index] = prod;
    this.cart.putCart(this.cartItems);
    this.viewCart();
    this.cart.updateTotal();
  }

    openModal(item:any) {
      this.modalItem = item;
      this.modal.present(); // Show the modal
    }
}
