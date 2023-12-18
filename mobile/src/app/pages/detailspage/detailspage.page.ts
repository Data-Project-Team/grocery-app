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
  generalpurchase: number = 0;
  constructor(
    private active: ActivatedRoute,
    public data: DataService,
    public api: ApiService
  ) { }

  ngOnInit() {
    if (this.active.snapshot.data['payload']) {
      this.item = this.active.snapshot.data['payload'];
      this.fetchPurchaseData(this.item);
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

  fetchPurchaseData(prod: any) {
    const action = "purchasedata";
    const data = `&prodId=${prod.id}`;
    this.api.getData(action,data).then(
      (response: any) => {
        if (response.msg === 'success') {
          this.generalpurchase = response.data.purchaseCount;
        } else {
          console.error('Failed to fetch purchase data');
        }
      },
      (error) => {
        console.error('Failed to fetch purchase data', error);
      }
    );
  }
}



