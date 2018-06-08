import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service'
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor() { }
  ngOnInit(){
    
  }

/* 
  productList:Product[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProduct()
    .snapshotChanges()
    .subscribe(item=>{
      this.productList=[];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"]=element.key;
        this .productList.push(x as Product)
      });
    });
  }

  onEdit(product:Product){
    this.productService.selectProduct=Object.assign({},product);

  }

  onDelecte($key:string){

  } */

}
