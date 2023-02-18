import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import {BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService  {

  search=new BehaviorSubject(" ")

  constructor(private http:HttpClient) { }

  //http request view all products


  // create new method 
  viewAllProducts(){
    return this.http.get("http://localhost:3000/products")
  }

  addProduct(newproduct:any){
    return this.http.post("http://localhost:3000/products", newproduct)
  }

  // creating api to get single product data
  viewproduct(id:any){
    return this.http.get("http://localhost:3000/products/"+id)
  } // to get the id, we are passing a 'id' as an argument into the viewproduct() method,
  // now this method has to be called in viewproduct component

  deleteProduct(id:any){
    return this.http.delete("http://localhost:3000/products/"+id)
  }

  editProduct(id:any, data:any){
    return this.http.put("http://localhost:3000/products/"+id,data)
  }
}
