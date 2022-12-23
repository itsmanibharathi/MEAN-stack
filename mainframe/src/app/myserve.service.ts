import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {from, Observable} from 'rxjs'
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class MyserveService {

  constructor(private http:HttpClient ) { }

  // port:number=4000
  // port:number=process.env['PORT'] || 4000
  
  getproduct():Observable<Product[]>{
    return  this.http.get<Product[]>(`/api/product`)
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  delproduct(id:any){
    this.http.delete(`/api/product/${id}`,this.httpOptions).subscribe(
    (val) => {
        console.log("The DELETE observable is now completed.");
    });
 
  }
}
