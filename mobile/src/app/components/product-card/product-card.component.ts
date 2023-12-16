import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent  implements OnInit {
  @Input() item: any;
  @Input() style:any;
  constructor(public data: DataService, private router: Router) { }

  ngOnInit() {
    
  }

  gotodetails(item:any){
    this.data.setData("i", item);
    this.router.navigate(['pages/home/details/i']);
  }

  
}
