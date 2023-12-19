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
    this.cart.getCart().then(
      (response: any) => {
        // console.log(response);
        if(response.msg === 'success'){
           let cartItems = response.data;
           const index = cartItems.findIndex((item: { id: any; }) => item.id === product.id );
           console.log(cartItems[index].quantity++);
           this.cart.totalPrice += cartItems[index].final_price ;
           this.item.quantity++;
           this.updateCartItemQuantity(product.id,product.quantity + 1)
           this.emitQuantityChanged();
        }else{
          console.log("failed to get cart")
        }
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
 
  }
  onDecrement(product: any) {
    let cartItems = this.cart.getCart();
    this.cart.getCart().then(
      (response: any) => {
        // console.log(response);
        if(response.msg === 'success'){
           let cartItems = response.data;
           const index = cartItems.findIndex((item: { id: any; }) => item.id === product.id );
           if (cartItems[index].quantity > 1) {
            cartItems[index].quantity--;
            this.cart.totalPrice -= cartItems[index].final_price;
            this.updateCartItemQuantity(product.id,product.quantity - 1)
            this.item.quantity--;
            
            this.emitQuantityChanged();
          }
        }else{
          console.log("failed to get cart")
        }
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
   
    

  public updateCartItemQuantity(cartItemId: number, quantity: number): void {
    this.cart.updateCartItemQuantity(cartItemId,quantity).then(
      (response: any) => {
        if(response.msg === 'success'){
         
        }
      },
      (error) => {
        console.error('Error updating quantity:', error);
      }
    );
    
    
  }
  
  public emitQuantityChanged() {
    this.quantityChanged.emit(this.item);
  }
  public saveQuantity() {
    // You can add validation here to ensure the quantity is greater than or equal to 1
    if (this.item.quantity >= 1) {
      // Save the quantity or perform any other necessary actions
      this.updateCartItemQuantity(this.item.id, this.item.quantity);
      this.emitQuantityChanged();
    } else {
      this.item.quantity = 1;
    }
  }

}
