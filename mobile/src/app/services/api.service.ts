import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl = 'http://127.0.0.1/grocery-app/backend/api.php';
  apikey = '&apikey=' + localStorage.getItem("usr_apikey");
  constructor(private http: HttpClient) { }

  
  initApp(action:any)  {
    var httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    const payload = 'actions=' + action;
    return new Promise((resolve, reject) => {
      this.http.post(this.serverUrl, payload, httpHeader).subscribe({
        next: (res) => resolve(res),
          
        error: (err) => {
        console.error('Error occurred during initApp:', err);
        reject(err)
        }
      });
  });
  }
  getData(action:any, data: any)  {
    var httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    const payload = this.apikey+'&actions='+ action + data;
    return new Promise((resolve, reject)=>{
      this.http.post(this.serverUrl, payload, httpHeader).subscribe({
        next: (res) => resolve(res),
        error: (err) => reject(err)
      });
     
    })

    
  }

  updateApiKey() {
    this.apikey = '&apikey=' + localStorage.getItem("usr_apikey");
  }  

}
