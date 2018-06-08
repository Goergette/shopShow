import { Injectable } from '@angular/core';
import{AngularFireDatabase,AngularFireList}from 'angularfire2/database'
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsList:AngularFireList<any>;

  selectProduct:Product=new Product();

  constructor(private firebase:AngularFireDatabase) { }

  getProduct(){
    return this.productsList=this.firebase.list('products');
  }

  insertProduct(product:Product){
    this.productsList.push({
      name:product.name,
      category:product.category,
      location:product.location,
      price:product.price

    });
  }

  updateProduct(product:Product){
    this.productsList.update(product.$key,{
      name:product.name,
      category:product.category,
      location:product.location,
      price:product.price
    });
  }
    deleteProduct($key:string){
 this.productsList.remove($key);
   

    }
  
}
