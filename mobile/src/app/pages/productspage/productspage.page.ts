import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './productspage.page.html',
  styleUrls: ['./productspage.page.scss'],
})
export class ProductspagePage  {
  @ViewChild('modal')modal!: IonModal;

  products:any = [];
  params: string = '';
  isLoading:boolean = false;
  currentSort: string = '';
  currentSortLabel: string = 'Sort'; 

  sortingOptions = [
    { label: 'Popular', value: 'trending' },
    { label: 'Newest', value: 'newest' },
    { label: 'Price: lowest to high', value: 'ascending' },
    { label: 'Price: highest to low', value: 'descending' }
  ];
  
  constructor(public api: ApiService, public data: DataService, private router: Router) {
    

    
   }

   ionViewDidEnter(){
  
  }



 
  openModal() {
    this.modal.present(); // Show the modal
  }



}
