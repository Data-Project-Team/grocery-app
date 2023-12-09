import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss'],
})
export class LikedComponent  implements OnInit, OnChanges {
  
  @Input() item: any ;
  
  likedProducts: any = [];
  case:string = '';
  constructor(private api: ApiService) {
    
   
  }
  ngOnChanges(changes: SimpleChanges) {

    if (changes[this.item.liked]) {
      console.log(changes[this.item.liked]);
    }
 }
  ngOnInit(): void {
    

  }

  
  likedtoggle(){
    const data = this.item;
    if (data.liked === '0'){
      this.case = 'liked';
      this.sendLikeToDB(data.id);
      data.liked = '1';
     
     
    }else {
      this.case = 'unliked';
      this.sendLikeToDB(data.id);
      data.liked = '0';
      
    } 
  }
  sendLikeToDB(prodId:any){
    const action = "like";
    const usrCode = localStorage.getItem("usr_code");

    const data = '&usrCode='+ usrCode +'&prodId='+ prodId+ '&case='+this.case;

   
    this.api.getData(action, data).then(
      (response: any) => {
        console.log(response);

        
      },
      (error) => {
        console.error('Error liking/unliking products:', error);
      }
    );
  }
  



}