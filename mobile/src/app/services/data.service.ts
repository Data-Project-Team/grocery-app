import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data:string[] = [];

  constructor() { }
  
  setData(id:any, data:any){
    this.data[id]=data;
  }
  getData(id:any){
    return this.data[id];
  }

}
