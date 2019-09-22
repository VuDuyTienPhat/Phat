import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DetailproductsComponent } from './detailproducts/detailproducts.component';
import { HienImageComponent } from './hien-image/hien-image.component';
import { WordComponent } from './word.component';
import { ProductComponent } from './product/product.component'
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Lab3HomeComponent } from './lab3-home/lab3-home.component';
import { CtdienthoaiComponent } from './ctdienthoai/ctdienthoai.component';
import { DienthoaiComponent } from './dienthoai/dienthoai.component';
import { Lab3Component } from './lab3/lab3.component';
import { GiohangComponent } from './giohang/giohang.component';
import { Lab1Component } from './lab1/lab1.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailproductsComponent,
    HienImageComponent,
    WordComponent,
    ProductComponent,
    HomeComponent, DetailsComponent, Lab3HomeComponent, CtdienthoaiComponent, DienthoaiComponent, Lab3Component, GiohangComponent,
    Lab1Component


  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,

    RouterModule.forRoot([
      //lab 1:     
      {
        path: 'lab1', component: Lab1Component,
        children: [
          { path: 'bai3', component: ProductComponent },
        ]
      },
      // lab 2: 
      { path: 'home', component: HomeComponent },
      { path: 'details/:id', component: DetailsComponent },
      //lab 3 :
      {
        path: 'lab3', component: Lab3Component,
        children: [
          { path: 'home', component: Lab3HomeComponent },
          { path: 'dienthoai', component: DienthoaiComponent },
          { path: 'dienthoai/:ID', component: CtdienthoaiComponent },
          { path: 'giohang', component: GiohangComponent },
        ]

      },
      // mới vào chuyển thẳng vào lab3 home
      {
        path: '',
        redirectTo: '/lab3/home',
        pathMatch: 'full'
      }



    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
