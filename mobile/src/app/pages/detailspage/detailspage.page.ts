import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.page.html',
  styleUrls: ['./detailspage.page.scss'],
})
export class DetailspagePage implements OnInit {

  item: any = { quantity: 1 }; // Initialize quantity to 1

  constructor(
    private active: ActivatedRoute,
    public data: DataService,
    public api: ApiService
  ) { }

  ngOnInit() {
    if (this.active.snapshot.data['payload']) {
      this.item = this.active.snapshot.data['payload'];
    }
  }

  increaseQuantity() {
    this.item.quantity++;
  }

  decreaseQuantity() {
    if (this.item.quantity > 1) {
      this.item.quantity--;
    }
  }

  calculateTotalPrice(): number {
    // Calculate total price based on quantity
    return this.item.final_price * this.item.quantity;
  }

}


