import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorytab',
  templateUrl: './categorytab.page.html',
  styleUrls: ['./categorytab.page.scss'],
})
export class CategorytabPage implements OnInit {
  
  categories: any[] = [];
  isLoading: boolean = false; 
  constructor() { }

  ngOnInit() {
  }

}
