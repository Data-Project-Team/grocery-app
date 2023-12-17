import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-plus-minus-toggle',
  templateUrl: './plus-minus-toggle.component.html',
  styleUrls: ['./plus-minus-toggle.component.scss'],
})
export class PlusMinusToggleComponent  implements OnInit {
  @Input() item:any;
  @Output() quantityChanged = new EventEmitter<any>(); 
  constructor(public cart: CartService) {
   
    
  }

  ngOnInit() {}
  onIncrement(product:any){
    let cartItems = this.cart.getCart();
    const index = cartItems.findIndex((item: { id: any; }) => item.id === product.id );
    cartItems[index].quantity++;
    this.cart.putCart(cartItems);
    this.cart.totalPrice += cartItems[index].final_price ;
    this.item.quantity++;
    this.emitQuantityChanged();
  }
  onDecrement(product: any) {
    let cartItems = this.cart.getCart();
    const index = cartItems.findIndex((item: { id: any; }) => item.id === product.id );
  
   
    if (cartItems[index].quantity > 1) {
      cartItems[index].quantity--;
      this.cart.putCart(cartItems);
      this.cart.totalPrice -= cartItems[index].final_price;
      this.item.quantity--;
      
      this.emitQuantityChanged();
    }
  }
  
  public emitQuantityChanged() {
    this.quantityChanged.emit(this.item);
  }
  public saveQuantity() {
    // You can add validation here to ensure the quantity is greater than or equal to 1
    if (this.item.quantity >= 1) {
      // Save the quantity or perform any other necessary actions
      this.emitQuantityChanged();
    } else {
      this.item.quantity = 1;
    }
  }
}
