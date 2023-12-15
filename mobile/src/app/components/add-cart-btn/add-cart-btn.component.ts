import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  
  selector: 'app-addcart-btn',
  templateUrl: './addcart-btn.component.html',
  styleUrls: ['./addcart-btn.component.scss'],
})
export class AddcartBtnComponent  implements OnInit {
  @Input() item:any;
  constructor(public cart: CartService) { }

  ngOnInit() {}

  addToCart(){
    this.cart.addToCart(this.item);
  }

}
