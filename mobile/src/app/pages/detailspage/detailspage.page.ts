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

 item:any;

  constructor(
    private active: ActivatedRoute,
    public data: DataService,
    public api: ApiService
  ) { 
  }

  ngOnInit() {
    if(this.active.snapshot.data['payload']){
      this.item= this.active.snapshot.data['payload'];
    }
  }
  

}
