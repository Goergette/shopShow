import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgForm, FormsModule}from '@angular/forms'



// firebase
import{ AngularFireModule} from 'angularfire2'
import{AngularFireDatabaseModule} from 'angularfire2/database'

//component
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';

//service
import { ProductService } from './services/product.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
