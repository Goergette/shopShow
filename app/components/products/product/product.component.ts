import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service'
import { NgForm } from '@angular/forms';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor( private productService : ProductService ) { }
 
  productForm:NgForm;

  ngOnInit() {
    this.productService.getProduct();
    this.resetForm(this.productForm);
  }
  onSubmit(productForm:NgForm)
  {
    this.productService.insertProduct(productForm.value);
    this.resetForm(productForm);
  }

  resetForm(productForm?:NgForm){

    if(productForm!=null)
      productForm.reset();
      this.productService.selectProduct = new Product;
  }

}
