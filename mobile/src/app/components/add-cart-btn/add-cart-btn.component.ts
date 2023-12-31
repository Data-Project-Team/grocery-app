import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  
  selector: 'app-addcart-btn',
  templateUrl: './add-cart-btn.component.html',
  styleUrls: ['./add-cart-btn.component.scss'],
})
export class AddcartBtnComponent {
  @Input() item:any;
  constructor(public cart: CartService) {

  }

  // ngOnInit() {}

  addToCart(){
    this.cart.addToCart(this.item.id);
    
  }

}
